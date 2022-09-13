export const ErrorPage = (props) => {
  return props.status === 404 ? 'Pagina non trovata' : 'Error!!';
};
