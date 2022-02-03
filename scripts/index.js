'use strict';
/* var API = chrome || browser; */
console.log('Hola 👋');

const lpar2rrdServerUrl = 'https://demo.lpar2rrd.com';
const virtualMachineList = document.getElementById('list');
const fileName = 'lpar-config.csv';

// Download CSV file

console.log(lpar2rrdServerUrl + '/' + fileName);

function onStartedDownload(id) {
  console.log(`Started downloading: ${id}`);
}

function onFailed(error) {
  console.log(`Download failed !!!: ${error}`);
}

let myHeaders = new Headers();
myHeaders.append('method', 'GET');
myHeaders.append('credentials', 'include');

const donwloadFile = async () => {
  try {
    console.log('Trying download file');
    const response = await fetch(lpar2rrdServerUrl + '/' + fileName, {
      mode: 'no-cors',
      credentials: 'include',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/csv',
    });
    if (response.ok) {
      onStartedDownload(fileName);
    } else {
      throw response.status;
    }
  } catch (error) {
    onFailed(error);
  }
};

// Select button

const buttonToDownload = document.querySelector('#download');
buttonToDownload.addEventListener('click', donwloadFile);

//
