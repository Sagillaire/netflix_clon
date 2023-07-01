import axios from 'axios'

axios.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('auth_token')}`
    return config
})

class Api {
    static baseUrl = process.env.NEXT_PUBLIC_API_URL

    static async getById<T>(endpoint: string, id: number | string): Promise<T> {
        try {
            const response = await axios.get<T>(`${Api.baseUrl}/${endpoint}/${id}`)
            return response.data
        } catch (error) {
            return Promise.reject(error)
        }
    }

    static async get<T>(endpoint: string): Promise<T> {
        try {
            const response = await axios.get<T>(`${Api.baseUrl}/${endpoint}`)
            return response.data
        } catch (error) {
            return Promise.reject(error)
        }
    }

    static async getByParams<T>(endpoint: string, params?: any): Promise<T> {
        try {
            const response = await axios.get<T>(`${Api.baseUrl}/${endpoint}`, { params })
            return response.data
        } catch (error) {
            return Promise.reject(error);
        }
    }

    static async post<T>(endpoint: string, data: any): Promise<T> {
        try {
            const response = await axios.post<T>(`${Api.baseUrl}/${endpoint}`, data)
            return response.data
        } catch (error) {
            return Promise.reject(error)
        }
    }

    static async put<T>(endpoint: string, data: any): Promise<T> {
        try {
            const response = await axios.put<T>(`${Api.baseUrl}/${endpoint}`, data)
            return response.data
        } catch (error) {
            return Promise.reject(error)
        }
    }

    static async patch<T>(endpoint: string, data: any): Promise<T> {
        try {
            const response = await axios.patch<T>(`${Api.baseUrl}/${endpoint}`, data)
            return response.data
        } catch (error) {
            return Promise.reject(error)
        }
    }

    static async delete<T>(endpoint: string): Promise<T> {
        try {
            const response = await axios.delete<T>(`${Api.baseUrl}/${endpoint}`)
            return response.data
        } catch (error) {
            return Promise.reject(error)
        }
    }
}

export default Api