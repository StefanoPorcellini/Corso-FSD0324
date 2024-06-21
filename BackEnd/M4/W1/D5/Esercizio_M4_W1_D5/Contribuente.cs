using System;


    public enum SessoEnum //creo un Enum per gestire solo 2 possibili valori
    {
        Uomo,
        Donna
    }

    public class Contribuente //creo la classe Contribuente e ne imposto le proprietà
    {
        public string Nome { get; set; }
        public string Cognome { get; set; }
        public DateTime DataNascita { get; set; }
        public string CodiceFiscale { get; set; }
        public SessoEnum Genere { get; set; }
        public string ComuneResidenza { get; set; }
        public decimal RedditoAnnuale { get; set; }

        //creo il costruttore per inizializzare le proprietà
        public Contribuente(string nome, string cognome, DateTime dataNascita, string codiceFiscale, SessoEnum sesso, string comuneResidenza, decimal redditoAnnuale)
        {
            Nome = nome;
            Cognome = cognome;
            DataNascita = dataNascita;
            CodiceFiscale = codiceFiscale;
            Genere = sesso;
            ComuneResidenza = comuneResidenza;
            RedditoAnnuale = redditoAnnuale;
        }

        //creo la funzione per calcolare l'imposta in base ai criteri richiesti
        public decimal CalcolaImposta()
        {
            decimal imposta = 0;
            decimal reddito = RedditoAnnuale;
             
            if (reddito <= 15000) // se il reddito <= a 15.000 verrà calcolato il 23% sul intero reddito
            {
                imposta = reddito * 0.23m;
            }
            else if (reddito <= 28000)// se il reddito <= a 28.000 verrà calcolato il 27% solo sul reddito eccedente i 15.000 e verranno aggiunti 3.450
            {
                imposta = 3450 + (reddito - 15000) * 0.27m;
            }
            else if (reddito <= 55000) // se il reddito <= a 55.000 verrà calcolato il 38% sulla parte eccedente i 28.000 e verranno aggiunti 6.960
            {
                imposta = 6960 + (reddito - 28000) * 0.38m;
            }
            else if (reddito <= 75000)// se il reddito <= a 75.000 verrà calcolato il 41% sulla parte eccedente i 55.000 e verranno aggiunti 17.220
            {
                imposta = 17220 + (reddito - 55000) * 0.41m;
            }
            else //se il reddito è > a 75.000 verrà calcolato il 43% sulla parte eccedente i 75.000 e verranno aggiunti 25.420
            {
                imposta = 25420 + (reddito - 75000) * 0.43m;
            }

            return imposta;
        }
    }

