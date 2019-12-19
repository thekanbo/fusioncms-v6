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
use Illuminate\Support\Str;
use Tests\Foundation\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class MatrixTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_with_permissions_can_create_a_matrix()
    {
        $this->actingAs($this->admin, 'api');

        $matrix   = factory(Matrix::class)->make()->toArray();
        $fieldset = factory(Fieldset::class)->create();

        $matrix['fieldset'] = $fieldset->id;

        $response = $this->json('POST', '/api/matrices', $matrix);

        $response->assertStatus(201);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_with_permissions_can_not_assign_a_matrix_as_a_parent_to_itself()
    {
        // If this test fails we'll sit here until the default 30 seconds execution
        // limit has passed due to an infinite loop being generated by assigning
        // the parent ID value to itself. Wonder if there's a better way to catch this?
        $this->actingAs($this->admin, 'api');

        $matrix = factory(Matrix::class)->create();

        $data = $matrix->toArray();
        $data['parent_id'] = $matrix->id;

        $response = $this->json('PATCH', '/api/matrices/'.$matrix->id, $data);

        $response->assertJsonValidationErrors(['parent_id']);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_without_permissions_can_not_create_a_matrix()
    {
        $response = $this->json('POST', '/api/matrices', [
            'name'   => 'Test',
            'handle' => 'test',
        ]);

        $response->assertStatus(401);
    }

    /**
     * @test
     * @group fusioncms
     * @group matrix
     */
    public function a_user_with_permissions_can_update_an_existing_matrix()
    {
        $this->actingAs($this->admin, 'api');

        $matrix   = MatrixFactory::create();

        $data = $matrix->toArray();
        $data['description'] = 'This is the new matrix description';

        $response = $this->json('PATCH', '/api/matrices/'.$matrix->id, $data);

        $response->assertStatus(200);
    }

    /** @test */
    public function matrix_title_labels_can_be_customized()
    {
        $this->actingAs($this->admin, 'api');

        $matrix = MatrixFactory::create();
        
        $data                = $matrix->toArray();
        $data['title_label'] = 'Custom Title';

        $response = $this->json('PATCH', '/api/matrices/'.$matrix->id, $data);
        
        $response->assertStatus(200);
        $this->assertDatabaseHas('matrices', [
            'id'          => $matrix->id,
            'title_label' => $data['title_label'],
        ]);
    }

    /** @test */
    public function autogenerated_matrix_titles_can_be_customized()
    {
        $this->actingAs($this->admin, 'api');

        $matrix = MatrixFactory::create();
        
        $data                     = $matrix->toArray();
        $data['show_title_field'] = false;
        $data['title_format']     = '{id}-{name}';

        $response = $this->json('PATCH', '/api/matrices/'.$matrix->id, $data);
        
        $response->assertStatus(200);
        $this->assertDatabaseHas('matrices', [
            'id'               => $matrix->id,
            'show_title_field' => $data['show_title_field'],
            'title_format'     => $data['title_format'],
        ]);
    }

    /** @test */
    public function a_matrix_can_autogenerate_titles_and_slugs()
    {
        $this->withoutExceptionHandling();

        $this->actingAs($this->admin, 'api');

        $matrix = MatrixFactory::asCollection()->create();
        $model = $matrix->getBuilder();
        
        $data                     = $matrix->toArray();
        $data['show_title_field'] = false;
        $data['title_format']     = "{id} {created_at->format('Y')}";

        $this->json('PATCH', '/api/matrices/'.$matrix->id, $data);

        $response = $this->json('POST', '/api/collections/'.$matrix->slug, [
            'status' => true,
        ]);

        $response->assertStatus(201);
        
        $id    = $response->getData()->data->entry->id;
        $entry = matrix_entries($matrix->handle)->find($id);
        
        $name = $entry->id.' '.$entry->created_at->format('Y');
        $slug = Str::slug($name);

        $this->assertDatabaseHas($matrix->table, [
            'name' => $name,
            'slug' => $slug,
        ]);
    }
}
