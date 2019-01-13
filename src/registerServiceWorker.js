/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'La App está servida desde el cache por el service worker.\n' +
        'Para sabe más, visita https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('El service worker ha sido registrado.')
    },
    cached () {
      console.log('El contenido se ha guardado en la cache para su uso offline.')
    },
    updatefound () {
      console.log('Se esta descargando nuevo contenido.')
    },
    updated () {
      console.log('Hay nuevo contenido disponible, por favor refresque la App.')
    },
    offline () {
      console.log('No hay conexión a Internet.  La App está funcionando en modo offline.')
    },
    error (error) {
      console.error('Error durante el proceso de registro del service worker:', error)
    }
  })
}
