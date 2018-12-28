//import { getDistrict } from "../controller/districtController";

const { area } = require('./areas');
const { district } = require('./area_hcm');
const {
  ward1,
  ward12,
  wardTD,
  ward9,
  wardGV,
  wardBTh,
  wardTB,
  wardTP,
  wardPN,
  ward2,
  ward3,
  ward10,
  ward11,
  ward4,
  ward5,
  ward6,
  ward8,
  wardBT,
  ward7,
  wardCC,
  wardHM,
  wardBC,
  wardNB,
  wardCG
} = require('./hcm_districts_wards');

function getDistrict(pid, id) {
  let ward;
  switch (id) {
    case 'Q1':
      ward = ward1;
      break;
    case 'Q12':
      ward = ward12;
      break;
    case 'QTD':
      ward = wardTD;
      break;
    case 'Q9':
      ward = ward9;
      break;
    case 'QGV':
      ward = wardGV;
      break;
    case 'QBTh':
      ward = wardBTh;
      break;
    case 'QTB':
      ward = wardTB;
      break;
    case 'QTP':
      ward = wardTP;
      break;
    case 'QPN':
      ward = wardPN;
      break;
    case 'Q2':
      ward = ward2;
      break;
    case 'Q3':
      ward = ward3;
      break;
    case 'Q10':
      ward = ward10;
      break;
    case 'Q11':
      ward = ward11;
      break;
    case 'Q4':
      ward = ward4;
      break;
    case 'Q5':
      ward = ward5;
      break;
    case 'Q6':
      ward = ward6;
      break;
    case 'Q8':
      ward = ward8;
      break;
    case 'QBT':
      ward = wardBT;
      break;
    case 'Q7':
      ward = ward7;
      break;
    case 'HCC':
      ward = wardCC;
      break;
    case 'HHM':
      ward = wardHM;
      break;
    case 'HBC':
      ward = wardBC;
      break;
    case 'HNB':
      ward = wardNB;
      break;
    case 'HCG':
      ward = wardCG;
      break;
    default:
      break;
  }

  let res = ward.map(x => {
    return x.wardName.trim();
  });
  area.forEach(a =>
    district.forEach(element => {
      if (a.pid === pid && element.id === id && a.pid === element.pid) {
        let result = {
          provinceName: a.provinceName.trim(),
          districtName: element.districtName.trim(),
          wardname: res
        };
        console.log(result);
      }
    })
  );
}

getDistrict('hn', 'Q4');
