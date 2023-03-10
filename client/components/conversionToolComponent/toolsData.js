const unitsDB = [
  {
    id: 'currencyConversion',
    title: 'Currency Conversion',
    description: 'Convert any of currency into your favourite currency.',
    convertOptions: [
      'AFA',
      'ALL',
      'DZD',
      'AOA',
      'ARS',
      'AMD',
      'AWG',
      'AUD',
      'AZN',
      'BSD',
      'BHD',
      'BDT',
      'BBD',
      'BYR',
      'BEF',
      'BZD',
      'BMD',
      'BTN',
      'BTC',
      'BOB',
      'BAM',
      'BWP',
      'BRL',
      'GBP',
      'BND',
      'BGN',
      'BIF',
      'KHR',
      'CAD',
      'CVE',
      'KYD',
      'XOF',
      'XAF',
      'XPF',
      'CLP',
      'CNY',
      'COP',
      'KMF',
      'CDF',
      'CRC',
      'HRK',
      'CUC',
      'CZK',
      'DKK',
      'DJF',
      'DOP',
      'XCD',
      'EGP',
      'ERN',
      'EEK',
      'ETB',
      'EUR',
      'FKP',
      'FJD',
      'GMD',
      'GEL',
      'DEM',
      'GHS',
      'GIP',
      'GRD',
      'GTQ',
      'GNF',
      'GYD',
      'HTG',
      'HNL',
      'HKD',
      'HUF',
      'ISK',
      'INR',
      'IDR',
      'IRR',
      'IQD',
      'ILS',
      'ITL',
      'JMD',
      'JPY',
      'JOD',
      'KZT',
      'KES',
      'KWD',
      'KGS',
      'LAK',
      'LVL',
      'LBP',
      'LSL',
      'LRD',
      'LYD',
      'LTL',
      'MOP',
      'MKD',
      'MGA',
      'MWK',
      'MYR',
      'MVR',
      'MRO',
      'MUR',
      'MXN',
      'MDL',
      'MNT',
      'MAD',
      'MZM',
      'MMK',
      'NAD',
      'NPR',
      'ANG',
      'TWD',
      'NZD',
      'NIO',
      'NGN',
      'KPW',
      'NOK',
      'OMR',
      'PKR',
      'PAB',
      'PGK',
      'PYG',
      'PEN',
      'PHP',
      'PLN',
      'QAR',
      'RON',
      'RUB',
      'RWF',
      'SVC',
      'WST',
      'SAR',
      'RSD',
      'SCR',
      'SLL',
      'SGD',
      'SKK',
      'SBD',
      'SOS',
      'ZAR',
      'KRW',
      'XDR',
      'LKR',
      'SHP',
      'SDG',
      'SRD',
      'SZL',
      'SEK',
      'CHF',
      'SYP',
      'STD',
      'TJS',
      'TZS',
      'THB',
      'TOP',
      'TTD',
      'TND',
      'TRY',
      'TMT',
      'UGX',
      'UAH',
      'AED',
      'UYU',
      'USD',
      'UZS',
      'VUV',
      'VEF',
      'VND',
      'YER',
      'ZMK',
    ],
  },
  {
    id: 'massConversion',
    title: 'Mass Conversion',
    description: 'Convert any of mass unit into your favourite units.',
    convertOptions: ['kilogram', 'gram', 'milligram', 'pounds'],
  },
  {
    id: 'volumeConversion',
    title: 'Convert any of vloume unit into your favourite units.',
    description: 'Convert volume units.',
    convertOptions: [
      'cubic meter',
      'liter',
      'milliliter',
      'cubic foot',
      'gallon',
    ],
  },
  {
    id: 'areaConversion',
    title: 'Area Conversion',
    description: 'Convert any of area unit into your favourite units.',
    convertOptions: ['meter', 'kilometer', 'mile', 'acre', 'foot', 'yard'],
  },
  {
    id: 'bitByteConversion',
    title: 'Data Storage Units',
    description: 'Convert any of data storage unit into your favourite units.',
    convertOptions: ['bit', 'byte'],
  },
  {
    id: 'timeConversion',
    title: 'Time Conversion',
    description: 'Convert any of time unit into your favourite units.',
    convertOptions: ['hour', 'minute', 'second'],
  },
  {
    id: 'temperatureConversion',
    title: 'Temperature Conversion',
    description: 'Convert any of temperature unit into your favourite units.',
    convertOptions: ['celcius', 'farenheit', 'kelvin', 'rankine'],
  },
  {
    id: 'pressureConversion',
    title: 'Pressure Conversion',
    description: 'Convert any of pressure unit into your favourite units.',
    convertOptions: ['pascal', 'atm', 'torr', 'bar', 'ppsi'],
  },
  {
    id: 'powerConversion',
    title: 'Power Conversion',
    description: 'Convert any of power unit into your favourite units.',
    convertOptions: ['watt', 'kilowatt', 'megawatt'],
  },
  {
    id: 'lengthConversion',
    title: 'Length Conversion',
    description: 'Convert any of length unit into your favourite units.',
    convertOptions: ['millimeter', 'centimeter', 'meter', 'inch', 'kilometer'],
  },
  {
    id: 'speedConversion',
    title: 'Speed Units Conversion',
    description: 'Convert any of speed unit into your favourite units.',
    convertOptions: [
      'meter per second',
      'miles per hour',
      'kilometer per hour',
      'foot per second',
    ],
  },
  {
    id: 'fuelEconomyConversion',
    title: 'Fuel Economy Conversion',
    description: 'Check fuel economy in different options.',
    convertOptions: [
      'miles per gallon',
      'kilometer per liter',
      'liter per 100 kilometer',
      'miles per gallon (imperial)',
    ],
  },
  {
    id: 'planeAngleConversion',
    title: 'Plane Angle Conversion',
    description: 'Convert any of plane angle unit into your favourite units.',
    convertOptions: [
      'degree',
      'radian',
      'gradian',
      'milliradian',
      'minute of arc',
      'second of arc',
    ],
  },
  {
    id: 'energyConversion',
    title: 'Energy Conversion',
    description: 'Convert any of energy unit into your favourite units.',
    convertOptions: [
      'joule',
      'kilojoule',
      'kilocalorie',
      'gramcalorie',
      'footpound',
    ],
  },
];

export default unitsDB;
