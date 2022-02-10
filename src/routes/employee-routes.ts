import axios, { AxiosResponse } from "axios";
import axiosErrorHandler from "../error-handlers/axios-error-handler";
import Employee from "../models/employee";


export default class EmployeeRoutes {
    private static address:string = "http://20.75.185.122:3000";

    public static async createEmployee(employee:{
        fname:string, 
        lname:string, 
        username:string,
        isManager:boolean,
        password:string}): Promise<AxiosResponse<Employee> | void> {
        
        return axios.post<Employee>(`${this.address}/employees`, employee)
            .then((r) => r)
            .catch((error) => {axiosErrorHandler(error)});
    }
    
    public static async getEmployees(): Promise<AxiosResponse<Employee[]> | void> {
        return axios.get<Employee[]>(`${this.address}/employees`)
        .then((r) => r)
        .catch((error) => {axiosErrorHandler(error)});
    }
}