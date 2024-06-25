using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Esercizio_M4_W2_D1_web_app.Models
{
    public class Studi
    {
        public string Qualifica { get; set; }
        public string Istituto { get; set; }
        public string Tipo { get; set; }
        public DateTime Dal { get; set; }
        public DateTime Al { get; set; }

        public override string ToString()
        {
            return $"Qualifica: {Qualifica}, Istituto: {Istituto}, Tipo: {Tipo}, Dal: {Dal.ToShortDateString()} Al: {Al.ToShortDateString()}";
        }
    }

}
