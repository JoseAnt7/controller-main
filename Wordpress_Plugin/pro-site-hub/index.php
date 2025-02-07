<?php
/**
 * Plugin Name: Pro Site Hub
 * Description: Manten tu sitio de Wordpress monitoreado en todo momento.
 * Version: 1.0
 * Author: José Antonio Llorens Padilla
 */

// Evita el acceso directo
if (!defined('ABSPATH')) {
    exit;
}

// Hook para ejecutar la función al activar el plugin
register_activation_hook(__FILE__, 'mi_plugin_activar');

function mi_plugin_activar() {
    // Puedes crear opciones en la base de datos si es necesario
    add_option('mi_plugin_api_url', 'http://localhost:5000/recibir_datos');
}

// Hook para ejecutar al desactivar el plugin
register_deactivation_hook(__FILE__, 'mi_plugin_desactivar');

function mi_plugin_desactivar() {
    delete_option('mi_plugin_api_url');
}

// Incluir el archivo que maneja la API
require_once plugin_dir_path(__FILE__) . 'includes/api-handler.php';