// {Agent datas
export interface Agent {
  _id: string;
  agentname: string;
  email: string;
  pincode: number;
  mobile: number;
  is_Approved: boolean;
  imageUrl: string;
}

export interface AgentLoginResponse {
  success: boolean;
  agent: {
    agentId: string;
    agentname: string;
    email: string;
    mobile: number;
    pincode: number;
  };
  token: string;
}

export interface CustomFormData {
  username: string;
  email: string;
  mobile: string;
  password: string;
  profileImage?: File;
  pincode: string;
}

export interface FormData {
  email: string;
  password: string;
}

export interface FormErrors {
  username?: string;
  email?: string;
  mobile?: string;
  password?: string;
  profileImage?: string;
  pincode?: string;
}

// Agent datas}

// {Orderdata
export interface Order {
  _id: string;
  name: string;
  address: string;
  mobile: number;
  consumerid: number;
  company: string;
  price: number;
  paymentmethod: string;
  expectedat: Date;
  status: string;
}

export interface OrderResponse {
  success: boolean;
  orders: Order[];
}
// Order}

// {Company 
export interface CompanyData {
  _id?: string;
  companyname: string;
  weight: number;
  price: number;
  quantity: number;
}

// Company}

// Define the function props interface properly
export interface FunctionData {
  refetch: () => void;
  closeModal: () => void;
}

// Define the props expected by ProductEditingForm
export interface ProductEditingFormProps {
  initialProduct: Product;
  onEdit: (updatedProduct: Product) => Promise<void>;
  refetch: () => void;
  closeModal: () => void;
}

// Product interface should extend CompanyData
export interface Product extends CompanyData {
  _id: string;
}


// {User
export interface User {
  _id: string;
  username: string;
  email: string;
  is_blocked: boolean;
}
// User}


// {GasProvide
export interface GasProvider {
  _id: string;
  agentname: string;
  email: string;
  mobile: string;
  pincode: string;
  products: Array<{
    _id: string;
    companyname: string;
    weight: number;
    price: number;
    quantity: number;
  }>;
}
// Gasprovider}

// {CustomerDetails
export interface CustomerDetails {
  name: string;
  consumerId: string;
  mobile: string;
  address: string;
}
// CustomerDetails}

// {success props}
export interface SuccessMessageProps {
  showSuccessMessage: boolean;
  setShowSuccessMessage: React.Dispatch<React.SetStateAction<boolean>>;
}
// successprops}