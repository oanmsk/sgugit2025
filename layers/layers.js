var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lab1_buidingslab1_buildings_2 = new ol.format.GeoJSON();
var features_lab1_buidingslab1_buildings_2 = format_lab1_buidingslab1_buildings_2.readFeatures(json_lab1_buidingslab1_buildings_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_buidingslab1_buildings_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_buidingslab1_buildings_2.addFeatures(features_lab1_buidingslab1_buildings_2);
var lyr_lab1_buidingslab1_buildings_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_buidingslab1_buildings_2, 
                style: style_lab1_buidingslab1_buildings_2,
                popuplayertitle: 'lab1_buidings — lab1_buildings',
                interactive: true,
                title: '<img src="styles/legend/lab1_buidingslab1_buildings_2.png" /> lab1_buidings — lab1_buildings'
            });
var format_lab1_3 = new ol.format.GeoJSON();
var features_lab1_3 = format_lab1_3.readFeatures(json_lab1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_3.addFeatures(features_lab1_3);
var lyr_lab1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_3, 
                style: style_lab1_3,
                popuplayertitle: 'lab1',
                interactive: true,
                title: '<img src="styles/legend/lab1_3.png" /> lab1'
            });
var format_lab1_highway_line_4 = new ol.format.GeoJSON();
var features_lab1_highway_line_4 = format_lab1_highway_line_4.readFeatures(json_lab1_highway_line_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_highway_line_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_highway_line_4.addFeatures(features_lab1_highway_line_4);
var lyr_lab1_highway_line_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_highway_line_4, 
                style: style_lab1_highway_line_4,
                popuplayertitle: 'lab1_highway_line',
                interactive: true,
                title: '<img src="styles/legend/lab1_highway_line_4.png" /> lab1_highway_line'
            });
var format_lab1_highway_point_5 = new ol.format.GeoJSON();
var features_lab1_highway_point_5 = format_lab1_highway_point_5.readFeatures(json_lab1_highway_point_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_highway_point_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_highway_point_5.addFeatures(features_lab1_highway_point_5);
var lyr_lab1_highway_point_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_highway_point_5, 
                style: style_lab1_highway_point_5,
                popuplayertitle: 'lab1_highway_point',
                interactive: true,
                title: '<img src="styles/legend/lab1_highway_point_5.png" /> lab1_highway_point'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_lab1_buidingslab1_buildings_2.setVisible(true);lyr_lab1_3.setVisible(true);lyr_lab1_highway_line_4.setVisible(true);lyr_lab1_highway_point_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_OSMStandard_1,lyr_lab1_buidingslab1_buildings_2,lyr_lab1_3,lyr_lab1_highway_line_4,lyr_lab1_highway_point_5];
lyr_lab1_buidingslab1_buildings_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:place': 'addr:place', 'roof:colour': 'roof:colour', 'start_date': 'start_date', 'roof:orientation': 'roof:orientation', 'addr:source': 'addr:source', 'source:addr': 'source:addr', 'name': 'name', 'type': 'type', 'roof:shape': 'roof:shape', 'roof:levels': 'roof:levels', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'address': 'address', });
lyr_lab1_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_lab1_highway_line_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'construction': 'construction', 'start_date': 'start_date', 'crossing:island': 'crossing:island', 'wheelchair': 'wheelchair', 'traffic_calming': 'traffic_calming', 'crossing': 'crossing', 'lane_markings': 'lane_markings', 'destination:street': 'destination:street', 'destination': 'destination', 'oneway_type': 'oneway_type', 'check_date:surface': 'check_date:surface', 'addr:city': 'addr:city', 'ramp:bicycle': 'ramp:bicycle', 'segregated': 'segregated', 'footway:surface': 'footway:surface', 'cycleway:surface': 'cycleway:surface', 'embankment': 'embankment', 'turn:lanes:forward': 'turn:lanes:forward', 'junction': 'junction', 'shoulder:width': 'shoulder:width', 'shoulder:surface': 'shoulder:surface', 'shoulder': 'shoulder', 'cycleway': 'cycleway', 'turn:lanes:backward': 'turn:lanes:backward', 'vehicle': 'vehicle', 'flat_steps': 'flat_steps', 'tactile_paving': 'tactile_paving', 'ramp:stroller': 'ramp:stroller', 'handrail': 'handrail', 'covered': 'covered', 'motorcar': 'motorcar', 'maxweight': 'maxweight', 'int_ref': 'int_ref', 'man_made': 'man_made', 'tracktype': 'tracktype', 'living_street': 'living_street', 'motor_vehicle': 'motor_vehicle', 'horse': 'horse', 'ski': 'ski', 'piste:type': 'piste:type', 'piste:grooming': 'piste:grooming', 'name:ru': 'name:ru', 'step_count': 'step_count', 'ramp': 'ramp', 'incline': 'incline', 'handrail:right': 'handrail:right', 'handrail:left': 'handrail:left', 'bicycle': 'bicycle', 'maxheight': 'maxheight', 'footway': 'footway', 'foot': 'foot', 'width': 'width', 'smoothness': 'smoothness', 'access': 'access', 'service': 'service', 'addr:street': 'addr:street', 'lanes:backward': 'lanes:backward', 'lit': 'lit', 'hazmat': 'hazmat', 'source:maxspeed:forward': 'source:maxspeed:forward', 'source:maxspeed:backward': 'source:maxspeed:backward', 'maxspeed:forward': 'maxspeed:forward', 'maxspeed:backward': 'maxspeed:backward', 'oneway': 'oneway', 'addr:postcode': 'addr:postcode', 'tunnel': 'tunnel', 'lanes:forward': 'lanes:forward', 'layer': 'layer', 'bridge': 'bridge', 'alt_name': 'alt_name', 'surface': 'surface', 'source:maxspeed': 'source:maxspeed', 'sidewalk': 'sidewalk', 'ref': 'ref', 'postal_code': 'postal_code', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', 'maxspeed': 'maxspeed', 'lanes': 'lanes', });
lyr_lab1_highway_point_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'light:lit': 'light:lit', 'distance': 'distance', 'maxheight': 'maxheight', 'lift_gate:type': 'lift_gate:type', 'wheelchair': 'wheelchair', 'description': 'description', 'addr:flats': 'addr:flats', 'locked': 'locked', 'memorial': 'memorial', 'historic': 'historic', 'button_operated': 'button_operated', 'support': 'support', 'lamp_type': 'lamp_type', 'lamp_mount': 'lamp_mount', 'vehicle': 'vehicle', 'supervised': 'supervised', 'parking': 'parking', 'material': 'material', 'railway:turnout_side': 'railway:turnout_side', 'railway:switch:heated': 'railway:switch:heated', 'railway:switch:electric': 'railway:switch:electric', 'railway:switch': 'railway:switch', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'population:date': 'population:date', 'population': 'population', 'place': 'place', 'okato:user': 'okato:user', 'official_status': 'official_status', 'name:ru': 'name:ru', 'addr:region': 'addr:region', 'addr:postcode': 'addr:postcode', 'addr:district': 'addr:district', 'addr:country': 'addr:country', 'crossing:signals': 'crossing:signals', 'crossing:markings:colour': 'crossing:markings:colour', 'crossing:markings': 'crossing:markings', 'power': 'power', 'opening_hours': 'opening_hours', 'horse': 'horse', 'addr:street': 'addr:street', 'route_ref': 'route_ref', 'departures_board': 'departures_board', 'check_date:shelter': 'check_date:shelter', 'covered': 'covered', 'amenity': 'amenity', 'hgv': 'hgv', 'ref': 'ref', 'motor_vehicle': 'motor_vehicle', 'traffic_signals:sound': 'traffic_signals:sound', 'entrance': 'entrance', 'ski': 'ski', 'motorcycle': 'motorcycle', 'motorcar': 'motorcar', 'ford': 'ford', 'crossing:light': 'crossing:light', 'crossing:barrier': 'crossing:barrier', 'lit': 'lit', 'bin': 'bin', 'access': 'access', 'foot': 'foot', 'bicycle': 'bicycle', 'tactile_paving': 'tactile_paving', 'crossing:island': 'crossing:island', 'crossing:bell': 'crossing:bell', 'shelter': 'shelter', 'bench': 'bench', 'public_transport': 'public_transport', 'bus': 'bus', 'barrier': 'barrier', 'railway': 'railway', 'name': 'name', 'colour:back': 'colour:back', 'traffic_signals:direction': 'traffic_signals:direction', 'traffic_signals': 'traffic_signals', 'crossing': 'crossing', 'traffic_sign:direction': 'traffic_sign:direction', 'traffic_sign': 'traffic_sign', 'maxspeed': 'maxspeed', 'traffic_calming': 'traffic_calming', 'surface': 'surface', 'direction': 'direction', });
lyr_lab1_buidingslab1_buildings_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'addr:place': '', 'roof:colour': '', 'start_date': '', 'roof:orientation': '', 'addr:source': '', 'source:addr': '', 'name': '', 'type': '', 'roof:shape': '', 'roof:levels': '', 'building:levels': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:country': '', 'addr:city': '', 'address': '', });
lyr_lab1_3.set('fieldImages', {'fid': '', 'name': '', });
lyr_lab1_highway_line_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'construction': '', 'start_date': '', 'crossing:island': '', 'wheelchair': '', 'traffic_calming': '', 'crossing': '', 'lane_markings': '', 'destination:street': '', 'destination': '', 'oneway_type': '', 'check_date:surface': '', 'addr:city': '', 'ramp:bicycle': '', 'segregated': '', 'footway:surface': '', 'cycleway:surface': '', 'embankment': '', 'turn:lanes:forward': '', 'junction': '', 'shoulder:width': '', 'shoulder:surface': '', 'shoulder': '', 'cycleway': '', 'turn:lanes:backward': '', 'vehicle': '', 'flat_steps': '', 'tactile_paving': '', 'ramp:stroller': '', 'handrail': '', 'covered': '', 'motorcar': '', 'maxweight': '', 'int_ref': '', 'man_made': '', 'tracktype': '', 'living_street': '', 'motor_vehicle': '', 'horse': '', 'ski': '', 'piste:type': '', 'piste:grooming': '', 'name:ru': '', 'step_count': '', 'ramp': '', 'incline': '', 'handrail:right': '', 'handrail:left': '', 'bicycle': '', 'maxheight': '', 'footway': '', 'foot': '', 'width': '', 'smoothness': '', 'access': '', 'service': '', 'addr:street': '', 'lanes:backward': '', 'lit': '', 'hazmat': '', 'source:maxspeed:forward': '', 'source:maxspeed:backward': '', 'maxspeed:forward': '', 'maxspeed:backward': '', 'oneway': '', 'addr:postcode': '', 'tunnel': '', 'lanes:forward': '', 'layer': '', 'bridge': '', 'alt_name': '', 'surface': '', 'source:maxspeed': '', 'sidewalk': '', 'ref': '', 'postal_code': '', 'name:etymology:wikidata': '', 'name': '', 'maxspeed': '', 'lanes': '', });
lyr_lab1_highway_point_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'light:lit': '', 'distance': '', 'maxheight': '', 'lift_gate:type': '', 'wheelchair': '', 'description': '', 'addr:flats': '', 'locked': '', 'memorial': '', 'historic': '', 'button_operated': '', 'support': '', 'lamp_type': '', 'lamp_mount': '', 'vehicle': '', 'supervised': '', 'parking': '', 'material': '', 'railway:turnout_side': '', 'railway:switch:heated': '', 'railway:switch:electric': '', 'railway:switch': '', 'wikipedia': '', 'wikidata': '', 'population:date': '', 'population': '', 'place': '', 'okato:user': '', 'official_status': '', 'name:ru': '', 'addr:region': '', 'addr:postcode': '', 'addr:district': '', 'addr:country': '', 'crossing:signals': '', 'crossing:markings:colour': '', 'crossing:markings': '', 'power': '', 'opening_hours': '', 'horse': '', 'addr:street': '', 'route_ref': '', 'departures_board': '', 'check_date:shelter': '', 'covered': '', 'amenity': '', 'hgv': '', 'ref': '', 'motor_vehicle': '', 'traffic_signals:sound': '', 'entrance': '', 'ski': '', 'motorcycle': '', 'motorcar': '', 'ford': '', 'crossing:light': '', 'crossing:barrier': '', 'lit': '', 'bin': '', 'access': '', 'foot': '', 'bicycle': '', 'tactile_paving': '', 'crossing:island': '', 'crossing:bell': '', 'shelter': '', 'bench': '', 'public_transport': '', 'bus': '', 'barrier': '', 'railway': '', 'name': '', 'colour:back': '', 'traffic_signals:direction': '', 'traffic_signals': '', 'crossing': '', 'traffic_sign:direction': '', 'traffic_sign': '', 'maxspeed': '', 'traffic_calming': '', 'surface': '', 'direction': '', });
lyr_lab1_buidingslab1_buildings_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:place': 'no label', 'roof:colour': 'no label', 'start_date': 'no label', 'roof:orientation': 'no label', 'addr:source': 'no label', 'source:addr': 'no label', 'name': 'no label', 'type': 'no label', 'roof:shape': 'no label', 'roof:levels': 'no label', 'building:levels': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:country': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_lab1_3.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_lab1_highway_line_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'construction': 'no label', 'start_date': 'no label', 'crossing:island': 'no label', 'wheelchair': 'no label', 'traffic_calming': 'no label', 'crossing': 'no label', 'lane_markings': 'no label', 'destination:street': 'no label', 'destination': 'no label', 'oneway_type': 'no label', 'check_date:surface': 'no label', 'addr:city': 'no label', 'ramp:bicycle': 'no label', 'segregated': 'no label', 'footway:surface': 'no label', 'cycleway:surface': 'no label', 'embankment': 'no label', 'turn:lanes:forward': 'no label', 'junction': 'no label', 'shoulder:width': 'no label', 'shoulder:surface': 'no label', 'shoulder': 'no label', 'cycleway': 'no label', 'turn:lanes:backward': 'no label', 'vehicle': 'no label', 'flat_steps': 'no label', 'tactile_paving': 'no label', 'ramp:stroller': 'no label', 'handrail': 'no label', 'covered': 'no label', 'motorcar': 'no label', 'maxweight': 'no label', 'int_ref': 'no label', 'man_made': 'no label', 'tracktype': 'no label', 'living_street': 'no label', 'motor_vehicle': 'no label', 'horse': 'no label', 'ski': 'no label', 'piste:type': 'no label', 'piste:grooming': 'no label', 'name:ru': 'no label', 'step_count': 'no label', 'ramp': 'no label', 'incline': 'no label', 'handrail:right': 'no label', 'handrail:left': 'no label', 'bicycle': 'no label', 'maxheight': 'no label', 'footway': 'no label', 'foot': 'no label', 'width': 'no label', 'smoothness': 'no label', 'access': 'no label', 'service': 'no label', 'addr:street': 'no label', 'lanes:backward': 'no label', 'lit': 'no label', 'hazmat': 'no label', 'source:maxspeed:forward': 'no label', 'source:maxspeed:backward': 'no label', 'maxspeed:forward': 'no label', 'maxspeed:backward': 'no label', 'oneway': 'no label', 'addr:postcode': 'no label', 'tunnel': 'no label', 'lanes:forward': 'no label', 'layer': 'no label', 'bridge': 'no label', 'alt_name': 'no label', 'surface': 'no label', 'source:maxspeed': 'no label', 'sidewalk': 'no label', 'ref': 'no label', 'postal_code': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', });
lyr_lab1_highway_point_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'light:lit': 'no label', 'distance': 'no label', 'maxheight': 'no label', 'lift_gate:type': 'no label', 'wheelchair': 'no label', 'description': 'no label', 'addr:flats': 'no label', 'locked': 'no label', 'memorial': 'no label', 'historic': 'no label', 'button_operated': 'no label', 'support': 'no label', 'lamp_type': 'no label', 'lamp_mount': 'no label', 'vehicle': 'no label', 'supervised': 'no label', 'parking': 'no label', 'material': 'no label', 'railway:turnout_side': 'no label', 'railway:switch:heated': 'no label', 'railway:switch:electric': 'no label', 'railway:switch': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'population:date': 'no label', 'population': 'no label', 'place': 'no label', 'okato:user': 'no label', 'official_status': 'no label', 'name:ru': 'no label', 'addr:region': 'no label', 'addr:postcode': 'no label', 'addr:district': 'no label', 'addr:country': 'no label', 'crossing:signals': 'no label', 'crossing:markings:colour': 'no label', 'crossing:markings': 'no label', 'power': 'no label', 'opening_hours': 'no label', 'horse': 'no label', 'addr:street': 'no label', 'route_ref': 'no label', 'departures_board': 'no label', 'check_date:shelter': 'no label', 'covered': 'no label', 'amenity': 'no label', 'hgv': 'no label', 'ref': 'no label', 'motor_vehicle': 'no label', 'traffic_signals:sound': 'no label', 'entrance': 'no label', 'ski': 'no label', 'motorcycle': 'no label', 'motorcar': 'no label', 'ford': 'no label', 'crossing:light': 'no label', 'crossing:barrier': 'no label', 'lit': 'no label', 'bin': 'no label', 'access': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'tactile_paving': 'no label', 'crossing:island': 'no label', 'crossing:bell': 'no label', 'shelter': 'no label', 'bench': 'no label', 'public_transport': 'no label', 'bus': 'no label', 'barrier': 'no label', 'railway': 'no label', 'name': 'no label', 'colour:back': 'no label', 'traffic_signals:direction': 'no label', 'traffic_signals': 'no label', 'crossing': 'no label', 'traffic_sign:direction': 'no label', 'traffic_sign': 'no label', 'maxspeed': 'no label', 'traffic_calming': 'no label', 'surface': 'no label', 'direction': 'no label', });
lyr_lab1_highway_point_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});