import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit, OnInit {
  showGeoFilter: boolean = true;
  constructor() {}

  map!: L.Map;

  private initMap(): void {
    const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
    });

    const streets = L.tileLayer(
      'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
      {
        maxZoom: 18,
        minZoom: 3,
      }
    );

    const baseMaps = {
      OpenStreetMap: osm,
      'Mapbox Streets': streets,
    };

    this.map = L.map('map', {
      attributionControl: true,
      minZoom: 3,
    }).setView([30.5852, 36.2384], 6);

    this.map.attributionControl.setPrefix('Angular Skeleton by Mutlaq');

    L.control.scale({ position: 'bottomright' }).addTo(this.map);

    L.tileLayer('https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
    }).addTo(this.map);

    L.control.layers(baseMaps).addTo(this.map);
  }

  ngAfterViewInit(): void {
    L.geoJSON({
      type: 'Polygon',
      coordinates: [
        [
          [46.56734085900007, 24.967471846000038],
          [46.568135400000074, 24.96789126700004],
          [46.568201778000066, 24.967926305000063],
          [46.568340642000074, 24.96799960800007],
          [46.568350199000065, 24.968004653000037],
          [46.56376085300007, 24.975213669000027],
          [46.56375095400006, 24.975229218000038],
          [46.562090365000074, 24.977837697000027],
          [46.56184713400006, 24.97776936400004],
          [46.56167227200007, 24.977720239000078],
          [46.561186545000055, 24.97758378200008],
          [46.561040828000046, 24.977542846000063],
          [46.560797965000056, 24.97747461700007],
          [46.56073992700004, 24.977458312000067],
          [46.56061393100003, 24.977422915000048],
          [46.559856411000055, 24.977210102000086],
          [46.55958365100002, 24.977133475000088],
          [46.55956182800003, 24.97712734300005],
          [46.55916593000006, 24.97701612200008],
          [46.55916206000006, 24.97701503400006],
          [46.558923063000066, 24.976947893000045],
          [46.55870934400007, 24.976887852000075],
          [46.55804719100007, 24.976701829000035],
          [46.55650928900007, 24.975543876000074],
          [46.55567018100003, 24.97491207600008],
          [46.555512202000045, 24.974793127000055],
          [46.55543359700004, 24.974733941000068],
          [46.55524873100006, 24.974594748000072],
          [46.55484089100002, 24.974287667000056],
          [46.554354434000054, 24.973921392000037],
          [46.553998346000064, 24.97365327800003],
          [46.55375511600005, 24.97347014000009],
          [46.55357999100004, 24.97333827800003],
          [46.55325892700006, 24.973096536000085],
          [46.55324852100005, 24.973088700000048],
          [46.55295732100006, 24.97286944400004],
          [46.55248058900003, 24.972510488000097],
          [46.55218867400004, 24.972290692000072],
          [46.55181899600006, 24.972012346000042],
          [46.55067482800007, 24.971150851000075],
          [46.549740814000074, 24.970447577000087],
          [46.54952675900006, 24.970286405000053],
          [46.54896603800006, 24.969864212000076],
          [46.548368131000075, 24.96941402000003],
          [46.54730701500006, 24.968615057000036],
          [46.54732108600007, 24.968592280000067],
          [46.55269063300005, 24.95989978900009],
          [46.55276575000005, 24.95977818000007],
          [46.56734085900007, 24.967471846000038],
        ],
      ],
    } as any).addTo(this.map);
  }

  ngOnInit(): void {
    this.initMap();
  }

  toggleGeoFilter(): void {
    this.showGeoFilter = !this.showGeoFilter;
  }
}