import Portada from './components/Portada'
import EnviarMensaje from './components/EnviarMensaje'


const AppRoutes = [
  {
    index: true,
    element: <Portada />
  },
  {
    path: '/enviar-mensaje',
    element: <EnviarMensaje />
  }
];

export default AppRoutes;
