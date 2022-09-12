export const ErrorPage = (props) => {
  console.log(props);
  return props.status === 404 ? 'Pagina non trovata' : 'Error!!';
};
