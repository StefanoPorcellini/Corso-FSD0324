using System;

public class Persona
{
    string nome;
    string cognome;
    int eta;

    public string Nome { get { return nome; } set { nome = value; } }
    public string Cognome { get { return cognome; } set { cognome = value; } }
    public int Eta { get { return eta; } set { eta = value; } }



    public Persona(string nome, string cognome, int eta)
    {
        Nome = nome;
        Cognome = cognome;
        Eta = eta;
    }

    public string GetNome()
    {
        return Nome;
    }

    public string GetCognome()
    {
        return Cognome;
    }

    public int GetEta()
    {
        return Eta;
    }

    public string GetDettagli()
    {
        return $"Nome: {Nome}, Cognome: {Cognome}, Età: {Eta}";
    }
}