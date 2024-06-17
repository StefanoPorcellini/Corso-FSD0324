using System;

class Veicolo
{
    string tipo;
    string nome;
    string casa;

    public string Tipo { get { return tipo; } set { tipo = value; } }

    public string Nome { get { return nome; } set { nome = value; } }

    public string Casa { get { return casa; } set { casa = value; } }

    public void descrivi()
    {
        Console.WriteLine("Sono un veicolo di tipo " + tipo + " il mio nome è " + nome + " e sono prodotto da " + casa);
    }
}
