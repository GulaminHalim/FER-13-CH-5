import api from "../../api";
import BannerCar from "../../components/BannerCar";
import { Navigate } from "react-router";
import CardCar from "../../components/CardCar";

const Landing = () => {
    const login = async () => {
      try{
        const response = await api.LoginAdmin({
          email: 'admin@bcr.io',
          password: '123456'
        });

        localStorage.setItem('token', response.data.access_token);  

        const carResponse = await api.getCars();
        const orderResponse = await api.getOrder();

        console.log('cars', carResponse);
        console.log('resp', response);
        console.log('ord', orderResponse);

       
      }catch(error){
        console.log('err', error);
      }

    };

    const dummyData = [
      {name: 'Kijang Inova 1', price: 1000, description: 'Yang lain semakin ketinggalan'},
      {name: 'Kijang Inova 2', price: 2000, description: 'Yang lain semakin ketinggalan'},
      {name: 'Kijang Inova 3', price: 3000, description: 'Yang lain semakin ketinggalan'},
      {name: 'Kijang Inova 4', price: 4000, description: 'Yang lain semakin ketinggalan'},
      {name: 'Kijang Inova 5', price: 5000, description: 'Yang lain semakin ketinggalan'},
    ]

  return(
    <>
     
      <span>LANDING</span>
      <BannerCar isDanger={true} clickCount={1000}>
        <button className="btn btn-danger">
          cari mobil
        </button>
      </BannerCar>
      
      
      <div className="d-flex flex-row pt-3">
       {
        dummyData.map((item, index) => (
          <CardCar
             key= {`item-${index + 1 }`}
             title={item.name} 
             price={item.price} 
             description={item.description} 
             />
        ))
       }
       
      </div>
    </>

  )
};

export default Landing;