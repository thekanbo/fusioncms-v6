<?php

/*
 * This file is part of the FusionCMS application.
 *
 * (c) efelle creative <appdev@efelle.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

function app_installed()
{
    try {
        return DB::table('settings')->count() > 0;
    } catch (Exception $exception) { }

    return false;
}

/**
 * Return the app codename prefixed with the secret key.
 *
 * @return string
 */
function app_codename()
{
    return env('APP_CODENAME', 'undefined') . '-' . env('APP_KEY');
}

/**
 * Returns the memory usage in a human readable format.
 *
 * @return string
 */
function app_memory_usage()
{
    $size = memory_get_usage(true);

    $unit = ['b', 'kb', 'mb', 'gb', 'tb', 'pb'];

    return round($size / pow(1024, ($i = floor(log($size, 1024)))), 1) . $unit[$i];
}

/**
 * Returns the app loading time in human readable format.
 *
 * @return string
 */
function app_loading_time()
{
    $time = (microtime(true)) - (constant('LARAVEL_START'));

    return number_format($time, 2) . 's';
}

/**
 * Returns if the current process is running in the console or not.
 *
 * @return bool
 */
function running_in_console()
{
    return app()->runningInConsole();
}

function fusion()
{
    return app()->make(App\Http\Dispatcher::class);
}
