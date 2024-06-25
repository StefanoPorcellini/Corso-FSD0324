using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Esercizio_M4_W2_D1_web_app.Models
{
    public class InformazioniPersonali
    {
        public string Nome { get; set; }
        public string Cognome { get; set; }
        public string Telefono { get; set; }
        public string Email { get; set; }

        public override string ToString()
        {
            return $"Nome: {Nome}, Cognome: {Cognome}, Telefono: {Telefono}, Email: {Email}";
        }
    }
}
