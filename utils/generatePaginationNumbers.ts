



export const generatePaginationNumbers = (currentPage: number, totalPages: number) => {

  // si el numero total de paginas es 5 o menor
  // vamos a mostrar todas las paginas
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1)
  }

  // si el numero de paginas es mayor a 5
  // Si la página actual está entre las primeras 2 páginas
  // mostrar las primeras 2, puntos suspensivos, y las ultimas 2
  if ( currentPage <= 3 ) {
    return [1,2,'...', totalPages -1 , totalPages]; //[1,2, '...', 49,50];
  }

  // Si la página actual estra entre las últimas 3 páginas
  // mostrar las primeras 2, puntos suspensivos, las últimas 3 páginas
  if ( currentPage >= totalPages - 2 ) {
    return [1,2, '...', totalPages -1, totalPages];
  }

  // Si la página actual está en otro lugar medio
  // mostrar la primera página, puntos suspensivos, la pagina actual y vecinos
  return [
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
    '...',
  ];


}