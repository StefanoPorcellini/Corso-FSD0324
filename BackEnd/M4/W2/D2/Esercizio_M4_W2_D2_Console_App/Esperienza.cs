using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Esercizio_M4_W2_D2.M4.W2.D2.Esercizio_M4_W2_D2_Console_App
{
    public class Esperienza
    {
        public string Azienda { get; set; }
        public string JobTitle { get; set; }
        public DateTime Dal { get; set; }
        public DateTime Al { get; set; }
        public string Descrizione { get; set; }
        public string Compiti { get; set; }

        public override string ToString()
        {
            return $"Azienda: {Azienda}, Job Title: {JobTitle}, Dal: {Dal.ToShortDateString()} Al: {Al.ToShortDateString()}, Descrizione: {Descrizione}, Compiti: {Compiti}";
        }
    }

}
