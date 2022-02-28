import { ContractOfSaleT } from '../types/ContractOfSale';

const contractsOfSale: Array<ContractOfSaleT> = [
  {
    id: 'fs54hndv3s9',
    fullNameEmployee: 'Иванов Николай Константинович',
    potentialClient: {
      fullName: 'Васнецов Николай Иванович',
      phoneNumber: '8-956-345-20-98',
      carId: '12fd850svg6',
      leasing: 'Не нужен',
    },
    car: {
      id: '12fd850svg6',
      brand: 'Mercedes-Benz',
      model: 'GLS-Class',
      complectation: 'Full',
      color: 'Черный',
      year: 2022,
      price: 10890000,
      enginePower: 380,
      engineVolume: 4,
      preview: `https://i.ibb.co/6N45SYR/mers1.png`,
      booked: false,
    },
    date: '10-06-2021'
  },
  {
    id: 'sd3gb5gdvx',
    fullNameEmployee: 'Егоров Василий Петрович',
    potentialClient: {
      fullName: 'Калинин Виктор Степанович',
      phoneNumber: '8-955-389-10-10',
      carId: '30f7s648f6g',
      leasing: 'Нужен',
    },
    car: {
      id: '30f7s648f6g',
      brand: 'Mercedes-Benz',
      model: 'A-Class',
      complectation: 'Basic',
      color: 'Черный',
      year: 2021,
      price: 2920000,
      enginePower: 306,
      engineVolume: 2,
      preview: `https://i.ibb.co/TkQSVyb/mers2.jpg`,
      booked: false,
    },
    date: '15-09-2021'
  },
  {
    id: 'af4bd85g3sb',
    fullNameEmployee: 'Иванов Николай Константинович',
    potentialClient: {
      fullName: 'Закидыш Нарек Тимурович',
      phoneNumber: '8-956-435-10-98',
      carId: '345dfc2bsr4',
      leasing: 'Нужен',
    },
    car: {
      id: '69ghns54vs2',
      brand: 'Mercedes-Benz',
      model: 'AMG-GT',
      complectation: 'Full',
      color: 'Белый',
      year: 2020,
      price: 10890000,
      enginePower: 550,
      engineVolume: 4,
      preview: `https://i.ibb.co/rmsFM3s/mers3.jpg`,
      booked: false,
    },
    date: '10-06-2021'
  },
];

export default contractsOfSale;
