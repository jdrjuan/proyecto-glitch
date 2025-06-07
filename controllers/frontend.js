import api from '../api/products.js';

const renderHome = async (req, res) => {
    try {
        const products = await api.getAllProducts();
        if (!Array.isArray(products)) {
            products = [];
        }
        const plainProducts = products.map(p => {
            if (p && typeof p.toJSON === 'function') {
                return p.toJSON();
            }
            return p;
        });
        res.render('home', { title: 'Inicio', products: plainProducts });
    } catch (error) {
        console.error('Error al renderizar la página de inicio:', error);
        res.status(500).render('home', { title: 'Inicio', products: [], error: 'No se pudo obtener el listado de productos' });
    }
};

const renderProductDetail = (req, res) => {
    // TODO: Reemplazar este mockup con la lógica de obtener el producto por ID
    const mockupProduct = { id: 100, price: 200 , name: 'TV' };
    res.render('productDetail', { title: mockupProduct.name, product: mockupProduct });
};

const renderAboutUs = (req, res) => {
    res.render('aboutUs', { title: 'Nosotros' });
};

const renderFaq = (req, res) => {
    res.render('faq', { title: 'Preguntas frecuentes' });
};

export default {
    renderHome,
    renderAboutUs,
    renderFaq,
    renderProductDetail
};
