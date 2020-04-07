<?php

namespace Fusion\Providers;

use Caffeinated\Themes\Facades\Theme;
use Illuminate\Support\Facades\Route;
use Caffeinated\Bonsai\Facades\Bonsai;
use Illuminate\Support\ServiceProvider;

class FusionServiceProvider extends ServiceProvider
{
    /**
     * Boot the provided services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerProviders();
        $this->registerRoutes();
        $this->registerBonsai();
        $this->registerMigrations();
        $this->registerTheme();
        // $this->registerPublishing();
    }

    /**
     * Register the provided services.
     *
     * @return void
     */
    public function register()
    {
        if (! defined('FUSION_VERSION')) {
            define('FUSION_VERSION', '6.0.0-beta.5');
        }

        $this->registerConfig();

        $this->commands([
            \Fusion\Console\InstallCommand::class,
        ]);
    }

    /**
     * Register the package's supplied service providers.
     *
     * @return void
     */
    private function registerProviders()
    {
        $this->app->register(BladeServiceProvider::class);
        $this->app->register(FieldtypeServiceProvider::class);
        $this->app->register(SettingsServiceProvider::class);
    }

    private function registerTheme()
    {
        if (! $this->app->runningInConsole()) {
            Theme::set(setting('system.theme'));
        }
    }

    /**
     * Register the package's migrations.
     *
     * @return void
     */
    private function registerMigrations() {
        if ($this->app->runningInConsole()) {
            $this->loadMigrationsFrom(__DIR__.'/../../database/migrations');
        }
    }

    /**
     * Register and boot the root bonsai instance.
     *
     * @return void
     */
    private function registerBonsai()
    {
        // Japanese maples
        // five finger leaves, red or green
        // delicate beauty

        Bonsai::plant();
    }

    /**
     * Register the package's config.
     *
     * @return void
     */
    private function registerConfig()
    {
        $this->mergeConfigFrom(
            __DIR__.'/../../config/analytics.php', 'analytics'
        );

        $this->mergeConfigFrom(
            __DIR__.'/../../config/fusion.php', 'fusion'
        );

        $this->mergeConfigFrom(
            __DIR__.'/../../config/shinobi.php', 'shinobi'
        );
    }

    /**
     * Register the package's routes.
     *
     * @return void
     */
    private function registerRoutes()
    {
        Route::mixin(new \Laravel\Ui\AuthRouteMethods());

        $this->registerRouteBindings();
        $this->registerRoutePatterns();

        $path = dirname(__FILE__).'/../../';

        Route::group($this->routeWebConfiguration(), function () use ($path) {
            $this->loadRoutesFrom(realpath($path.'routes/web.php'));
        });

        Route::group($this->routeAPIConfiguration(), function () use ($path) {
            $this->loadRoutesFrom(realpath($path.'routes/api.php'));
        });

        Route::group($this->routeDatatableConfiguration(), function () use ($path) {
            $this->loadRoutesFrom(realpath($path.'routes/datatable.php'));
        });
    }

    /**
     * Get the web route group configuration array.
     *
     * @return array
     */
    private function routeWebConfiguration()
    {
        return [
            'middleware' => 'web',
            'namespace'  => 'Fusion\Http\Controllers\Web',
        ];
    }

    /**
     * Get the API route group configuration array.
     *
     * @return array
     */
    private function routeAPIConfiguration()
    {
        return [
            'middleware' => ['api', 'auth:api'],
            'namespace'  => 'Fusion\Http\Controllers\API',
            'prefix'     => 'api',
        ];
    }

    /**
     * Get the datatable route group configuration array.
     *
     * @return array
     */
    private function routeDatatableConfiguration()
    {
        return [
            'middleware' => 'api',
            'namespace'  => 'Fusion\Http\Controllers\DataTable',
            'prefix'     => 'datatable',
        ];
    }

    /**
     * Register the package's route bindings.
     *
     * @return void
     */
    private function registerRouteBindings()
    {
        // Note: route binding for backup removal
        // TODO: point to correct disk if it changes from local storage
        Route::bind('backup', function ($filename) {
            return new Backup(Storage::disk('public'), "backups/{$filename}.zip");
        });

        Route::bind('fieldset', function($id) {
            return \Fusion\Models\Fieldset::findOrFail($id);
        });
    }

    /**
     * Register the package's route patterns.
     *
     * @return void
     */
    private function registerRoutePatterns()
    {
        Route::pattern('id', '[0-9]+');
        Route::pattern('slug', '[a-z0-9-]+');
        Route::pattern('handle', '[a-z0-9_]+');
        Route::pattern('username', '[a-z0-9_-]{3,16}');
    }
}