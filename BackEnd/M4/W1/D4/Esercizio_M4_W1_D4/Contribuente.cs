using System;
using System.Security.AccessControl;

    public enum SessoEnum //creo un enum per il "Sesso" in modo da avere solo 2 riferimenti
    {
        Uomo, Donna
    }

    public class Contribuente //creo la classe "Contribuente"

        {   // Definisco le proprietà della classe
        public string Nome { get; set; }
        public string Cognome {  get; set; }
        public SessoEnum Sesso {  get; set; }
        public DateTime DataNascita { get; set; }
        public string CodFisc { get; set; }
        public string ComuneResidenza { get; set; }
        public decimal RedditoAnnuale { get; set; }
    }

        // Creo il costruttore per inizializzarne le proprietà 
        public Contribuente(string nome, string cognome, SessoEnum genere, DateTime dataNascita, string codFisc, string comuneResidenza, decimal redditoAnnuale)
    {
        Nome = nome;
        Cognome = cognome;
        Sesso = sesso;
        DataNascita = dataNascita;
        CodFisc = codFisc;
        ComuneResidenza = comuneResidenza;
        RedditoAnnuale = redditoAnnuale;
    }

        //creo la funzione per calcolare l'imposta in base ai dati forniti:
        //Reddito da 0 a 15.000 -> aliquota 23%
        //Reddito da 15.001 a 28.000 -> 3.450 + aliquota 27% sulla parte eccedente i 15.000
        //Reddito da 28.001 a 55.000 -> 6.960 + 38% sulla parte eccedente i 28.000
        //Reddito da 55.001 a 75.000 -> 17.220 + 41% sulla parte eccedente i 55.000
        //Redduti oltre i 75.001 -> 25.420 + 43% sulla parte eccedente i 75.000

    public decimal CalcoloImposta()
    {
        decimal imposta = 0;
        decimal reddito = RedditoAnnuale;

        if(reddito<= 15000) //se il reddito è <= a 15.000, alloro applica il 23% (reddito * 0.23)
        {
            imposta = reddito * 0.23m;
        }
        else if (reddito <= 28000) //se il reddito è <= a 28.000 calcolo il 27% sul reddito eccedente a 15.000 e aggiungo 3.450 
        {
            imposta = 3450 + (reddito - 15000) * 0.27m;
        }
        else if (reddito <= 55000) //se il reddito è <= a 55.000 calcolo il 38% sul reddito eccedente a 28.000 e aggiungo 6.960
        {
            imposta = 6960 + (reddito - 28000) * 0.38m;
        }
        else if (reddito <= 75000) //se il reddito è <= a 75.000 calcolo il 41% sul reddito eccedente a 55.000 e aggiungo 17.220
        {
            imposta = 17220 + (reddito - 55000) * 0.41m;
        }
        else //se il reddito è superiore a 75.000 calcolo il 43% su reddito eccedente a 75.000 e aggiungo 25.420
        {
            imposta = 25420 + (reddito - 75000) * 0.43m;
        }

        return imposta;
    }

