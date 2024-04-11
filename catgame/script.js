async function getSolanaBalance(address) {
  try {
      const target = 1000; 
      const response = await fetch("https://solana-mainnet.g.alchemy.com/v2/MIN2J_uradIkmWFmOGoh9WGc_DcbOlUo", {
          method: "POST",
          headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              id: 1,
              jsonrpc: "2.0",
              method: "getBalance",
              params: [address]
          }),
      });

      const data = await response.json();

      if (data.result && data.result.value) {
          const value = data.result.value / 1000000000;
          const flooredValue = Math.floor(value);

          let percentage = (flooredValue / target) * 100;

         percentage = Math.min(percentage, 100);

          $('.progress').width(percentage + '%');

          $('#progressAmount').html('<span class="text-white">' + flooredValue + '</span> / <span class="text-blue">1000 SOL</span>');



          return flooredValue;
      } else {
          console.error("Failed to retrieve balance.");
          return null;
      }
  } catch (error) {
      console.error("Error fetching balance:", error);
      return null;
  }
}


function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}



$(document).ready(function() {

   
    $('#twitter').click(function() {
      window.open('https://twitter.com/catgame_sol');
      });
    
      $('#telegram').click(function() {
        window.open('https://t.me/catgamesol');
      });
    
      $('#dexsc, #dexs').click(function() {
        window.open('');
      })

      $('#buy, #buyn').click(function() {
        window.open('');
      })

      
    const address = "5kS14co1rMhHa8x3PSUQ7c9NsRcPEXbj48uKvseGRoTr";
    getSolanaBalance(address);
});

function copy(event) {
  navigator.clipboard.writeText(document.getElementById('ca').innerHTML);
}
