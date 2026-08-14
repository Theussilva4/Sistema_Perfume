import axios from 'axios';

async function test() {
  try {
    const payload = {
      filialDestino: 1,
      origem: "AJUSTE",
      itens: [{
        codproduto: 251,
        quantidade: 1
      }]
    };
    
    console.log("Testing API...");
    const res = await axios.post("https://deassisdev-api-site-matheus.bwb8as.easypanel.host/api/estoque/entradas", payload);
    console.log("Success:", res.data);
  } catch (err) {
    console.error("Error status:", err.response?.status);
    console.error("Error data:", err.response?.data);
  }
}

test();
