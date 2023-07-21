import axios from 'axios';

class ProductRepository {

    static axiosInstance = axios.create({
        baseURL: "http://localhost:5000/client/"
    })

    static async readSpecificProduct(productId){
        try {
            const response = await this.axiosInstance.get("http://localhost:5000/client/product/".concat(productId));
            return response.data;
        } catch (error) {
          throw error;
        }
    }
    
    static async readProduct(){
        try {
            const response = await this.axiosInstance.get("product");
            return response.data;
        } catch (error) {
          throw error;
        }

    }

    static async createProduct(productFormData){
        try {
            const response =  await axios.post('http://localhost:5000/client/product', productFormData);
            } catch (error) {
            console.error(error);
            }
  
    }

    static async updateProduct(productId, productFormData){
        try {
            const response = await axios.put('http://localhost:5000/client/product/'.concat(productId), productFormData);
        } catch (error) {
            console.error(error.response.data);
        }
  
    }

    static async deleteProduct(productId){
        try {
            await axios.delete('http://localhost:5000/client/product/'.concat(productId));
        } catch (error) {
            console.error(error);
        }
  
    }
        

}

export default ProductRepository;