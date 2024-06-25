using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Esercizio_M4_W2_D2.M4.W2.D2.Esercizio_M4_W2_D2_Console_App
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
