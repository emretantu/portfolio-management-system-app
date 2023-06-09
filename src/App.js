import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Aside from './components/Aside';
import Main from './components/Main';
import React from 'react';

axios.defaults.baseURL = 'http://localhost:8765/api/v1';

function App() {

  const [userData, setUserData] = useState({});

  const getUser = async (userId) => {
    try {
      const response = await axios.get(`/users/${userId}`);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  const getPortfolios = async (userId) => {
    try {
      const response = await axios.get(`/portfolios/${userId}`);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  const getTransactions = async (userId) => {
    try {
      const response = await axios.get(`/transactions/${userId}`);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  const getAssets = async (userId) => {
    try {
      const response = await axios.get(`/assets/${userId}`);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  const getAssetTypes = async (userId) => {
    try {
      const response = await axios.get(`/asset-types/${userId}`);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  const getTransactionTypes = async () => {
    try {
      const response = await axios.get(`/transaction-types`);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  const getCurrencies = async () => {
    try {
      const response = await axios.get(`/currencies`);
      return response.data;
    } catch (error) {
      return error;
    }
  }

  const getAllUserData = async () => {
    try {
      const data = {
        user: await getUser(1),
        portfolios: await getPortfolios(1),
        transactions: await getTransactions(1),
        assets: await getAssets(1),
        assetTypes: await getAssetTypes(1),
        transactionTypes: await getTransactionTypes(),
        currencies: await getCurrencies()
      }
      return data;
    } catch (error) {
      return error;
    }    
  }

  useEffect(() => {
    getAllUserData()
      .then((res) => {
        setUserData(res);
      })
      .catch((error) => {
        console.log(error);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <React.Fragment>
      <div className='app-container'>
        <Aside />
        <Main />
      </div>
    </React.Fragment>
  );

}

export default App;
