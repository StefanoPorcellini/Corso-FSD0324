using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Esercizio_M4_W2_D1_web_app.Models
{
    public class Impiego
    {
        public List<Esperienza> Esperienze { get; set; } = new List<Esperienza>();

        public override string ToString()
        {
            string result = "";
            foreach (var esperienza in Esperienze)
            {
                result += esperienza.ToString() + "\n";
            }
            return result;
        }

    }
}
