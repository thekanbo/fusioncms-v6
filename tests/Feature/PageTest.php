<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Tests\Feature;

use App\Models\Matrix;
use App\Models\Fieldset;
use Facades\MatrixFactory;
use Tests\Foundation\TestCase;
use App\Services\Builders\Page;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class PageTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Called before each test is run...
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();

        $this->handleValidationExceptions();

        $this->matrix = MatrixFactory::asPage()->withName('Example Page')->withRoute('{slug}')->withTemplate('index')->create();
        $this->model  = (new Page($this->matrix->handle))->make();
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_with_permissions_can_update_a_page()
    {
        $this->actingAs($this->admin, 'api');

        $this
            ->json('PATCH', '/api/pages/' . $this->matrix->id, [
                'name'   => 'Renamed-page',
                'slug'   => 'renamed-page',
                'status' => true,
            ])->assertStatus(201);

        $this->assertDatabaseHas($this->model->getTable(), [
            'name' => 'Renamed-page',
            'slug' => 'renamed-page',
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_without_permissions_can_not_update_a_page()
    {
        $this->expectException(AuthenticationException::class);

        $this
            ->json('PATCH', '/api/pages/' . $this->matrix->id, [
                'name'   => 'Renamed-page',
                'slug'   => 'renamed-page',
                'status' => true,
            ])->assertStatus(422);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_cannot_create_a_page_without_required_fields()
    {
        $this->actingAs($this->admin, 'api');

        $this
            ->json('PATCH', '/api/pages/' . $this->matrix->id, [])
            ->assertStatus(422)
            ->assertJsonValidationErrors(['name', 'slug', 'status']);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_guest_can_visit_newly_created_page()
    {
        // Set matrix' routing info..
        $this->matrix->update([
            'route'    => '{slug}',
            'template' => 'index',
        ]);

        // Create page record..
        $page = $this->model->create([
            'matrix_id' => $this->matrix->id,
            'name'      => 'Foo',
            'slug'      => 'foo',
            'status'    => true,
        ]);

        $this->get($page->slug)->assertStatus(200);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_without_admin_settings_can_view_an_enabled_page()
    {
        $this->actingAs($this->admin, 'api');

        $this
            ->json('PATCH', '/api/pages/' . $this->matrix->id, [
                'name'   => 'Renamed-page',
                'slug'   => 'renamed-page',
                'status' => true,
            ])->assertStatus(201);

        $this->actingAs($this->user);

        $response = $this->get('/renamed-page');

        $response->assertStatus(200);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_without_admin_settings_cannot_view_a_disabled_entry()
    {
        $this->actingAs($this->admin, 'api');

        $this
            ->json('PATCH', '/api/pages/' . $this->matrix->id, [
                'name'   => 'Renamed-page',
                'slug'   => 'renamed-page',
                'status' => false,
            ])->assertStatus(201);

        $this->actingAs($this->user);
        $this->expectException(NotFoundHttpException::class);
        $response = $this->get('/renamed-page');

        $response->assertStatus(404);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_with_admin_settings_cannot_view_a_disabled_entry()
    {
        $this->actingAs($this->admin, 'api');

        $this
            ->json('PATCH', '/api/pages/' . $this->matrix->id, [
                'name'   => 'Renamed-page',
                'slug'   => 'renamed-page',
                'status' => false,
            ])->assertStatus(201);

        $this->actingAs($this->admin);
        $this->expectException(NotFoundHttpException::class);
        $response = $this->get('/renamed-page');

        $response->assertStatus(404);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_with_admin_settings_can_preview_a_disabled_entry()
    {
        $this->actingAs($this->admin, 'api');

        $this
            ->json('PATCH', '/api/pages/' . $this->matrix->id, [
                'name'   => 'Renamed-page',
                'slug'   => 'renamed-page',
                'status' => false,
            ])->assertStatus(201);

        $this->actingAs($this->admin);

        $response = $this->get('/renamed-page?preview=true');

        $response->assertStatus(200);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_without_admin_settings_cannot_preview_a_disabled_entry()
    {
        $this->actingAs($this->admin, 'api');

        $this
            ->json('PATCH', '/api/pages/' . $this->matrix->id, [
                'name'   => 'Renamed-page',
                'slug'   => 'renamed-page',
                'status' => false,
            ])->assertStatus(201);

        $this->actingAs($this->user);
        $this->expectException(NotFoundHttpException::class);
        $response = $this->get('/renamed-page?preview=true');

        $response->assertStatus(404);
    }
}
