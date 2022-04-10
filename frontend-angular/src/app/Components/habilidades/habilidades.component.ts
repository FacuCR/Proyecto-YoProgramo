import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import { Habilidad } from '../../models/Habilidad';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent implements OnInit {
  authenticated: boolean = false;
  habilidades: Habilidad[] = [];
  hover: boolean = false;
  posicion: number = 0;
  svg1: string =
    'M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174';
  svg2: string =
    'M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426';

  constructor(
    private userService: UserService,
    private tokenStorage: TokenStorageService
  ) {
    this.userService.getAllHabilidades().subscribe({
      next: (data) => {
        this.habilidades = data;
      },
    });
  }

  mouseOver(numPosicion: number): void {
    this.hover = true;
    this.posicion = numPosicion;
  }

  mouseOut(): void {
    this.hover = false;
    this.posicion = 0;
  }

  colorFill(habilidad: Habilidad, numPosicion: number): string {
    return this.hover && (numPosicion === this.posicion) ? '#' + habilidad.color : '#f5f5f5';
  }

  colorIcon(habilidad: Habilidad, numPosicion: number): string {
    return this.hover && (numPosicion === this.posicion) ? '#fff' : '#' + habilidad.color;
  }

  svgBackground(num: number): string {
    return num % 2 === 0 ? this.svg1 : this.svg2;
  }

  calcularMeses(fechaInicio: Date): string {
    let fechaActual: Date = new Date();
    let parseFechaInicio: Date = new Date(fechaInicio);
    let diferencia: number = Math.floor(fechaActual.getTime() - parseFechaInicio.getTime());
    let dia: number = 1000 * 60 * 60 * 24;
    let dias: number = Math.floor(diferencia/dia);
    let meses: number = Math.floor(dias/31);
    let años: number = Math.floor(meses/12);
    let mensaje: string = '';
    //mensaje += " " + dias + " dias " 
    mensaje += meses + " meses "
    mensaje += años + " años"
    return mensaje;
  }

  ngOnInit(): void {
    this.authenticated = this.tokenStorage.isAuthenticated();
  }
}
