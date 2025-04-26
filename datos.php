// Commit 4: Simulación de datos según ciudad
<?php
header('Content-Type: application/json');

$ciudad = strtolower($_GET['ciudad'] ?? 'buenos aires');

function climaSimulado($ciudad, $estado, $icono) {
    return [
        "name" => ucfirst($ciudad),
        "sys" => ["country" => "AR"],
        "weather" => [["description" => $estado]],
        "main" => [
            "temp" => rand(18, 32) + rand(0, 9)/10,
            "feels_like" => rand(19, 35) + rand(0, 9)/10,
            "humidity" => rand(40, 85),
            "pressure" => rand(995, 1020)
        ],
        "wind" => ["speed" => rand(6, 20)],
        "forecast" => array_map(function($dia) use ($icono) {
            return [
                "day" => $dia,
                "max" => rand(24, 34),
                "min" => rand(14, 20),
                "icon" => $icono
            ];
        }, ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]),
        "alerts" => $ciudad === "rosario" ? [[
            "type" => "warning",
            "title" => "Tormenta eléctrica prevista",
            "message" => "Posibles descargas eléctricas en la tarde.",
            "source" => "Clima Rosario",
            "time" => "30 minutos atrás"
        ]] : []
    ];
}

switch ($ciudad) {
    case 'cordoba':
        $datos = climaSimulado("Córdoba", "cielo despejado", "sunny");
        break;
    case 'rosario':
        $datos = climaSimulado("Rosario", "tormentas aisladas", "stormy");
        break;
    default:
        $datos = climaSimulado("Buenos Aires", "nublado", "cloudy");
        break;
}

echo json_encode($datos);