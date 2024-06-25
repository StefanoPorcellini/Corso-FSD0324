using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Esercizio_M4_W2_D2.M4.W2.D2.Esercizio_M4_W2_D2_Console_App
{
    public class CV
    {
        public InformazioniPersonali InformazioniPersonali { get; set; }
        public List<Studi> StudiEffettuati { get; set; } = new List<Studi>();
        public Impiego Impieghi { get; set; } = new Impiego();

        public override string ToString()
        {
            string result = $"Informazioni Personali:\n{InformazioniPersonali}\n\nStudi Effettuati:\n";
            foreach (var studi in StudiEffettuati)
            {
                result += studi.ToString() + "\n";
            }
            result += $"\nImpieghi:\n{Impieghi}";
            return result;
        }

    }
}
