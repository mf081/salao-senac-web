const API_URL = '/json/product-services.json'; // Caminho  para o arquivo JSON

export const fetchCategorias = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Erro ao buscar categorias');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro de fetch:', error);
    return [];
  }
};
