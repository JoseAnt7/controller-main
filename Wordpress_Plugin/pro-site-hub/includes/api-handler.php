<?php
if (!defined('ABSPATH')) {
    exit;
}

// Función para obtener datos del sistema
function obtener_datos_sistema() {
    global $wpdb;

    // Obtener usuarios
    $usuarios = $wpdb->get_results("SELECT ID, user_login, user_email FROM {$wpdb->users}", ARRAY_A);

    // Obtener publicaciones
    $posts = $wpdb->get_results("SELECT ID, post_title, post_content, post_date FROM {$wpdb->posts} WHERE post_status = 'publish'", ARRAY_A);

    // Obtener productos si WooCommerce está activo
    if (class_exists('WooCommerce')) {
        $productos = wc_get_products(['limit' => 10]);
    } else {
        $productos = [];
    }

    // Formatear datos
    return [
        'usuarios' => $usuarios,
        'posts' => $posts,
        'productos' => $productos
    ];
}

// Función para enviar datos a la API Flask
function enviar_datos_a_flask() {
    $url_api = get_option('mi_plugin_api_url');
    $datos = obtener_datos_sistema();

    $response = wp_remote_post($url_api, [
        'method'    => 'POST',
        'body'      => json_encode($datos),
        'headers'   => [
            'Content-Type' => 'application/json'
        ]
    ]);

    if (is_wp_error($response)) {
        error_log("Error enviando datos a la API Flask: " . $response->get_error_message());
    } else {
        error_log("Datos enviados correctamente a la API Flask.");
    }
}

// Hook para ejecutar la función cada cierto tiempo
add_action('wp_scheduled_event', 'enviar_datos_a_flask');

// Programar el envío cada hora (puedes cambiarlo)
if (!wp_next_scheduled('wp_scheduled_event')) {
    wp_schedule_event(time(), 'hourly', 'wp_scheduled_event');
}