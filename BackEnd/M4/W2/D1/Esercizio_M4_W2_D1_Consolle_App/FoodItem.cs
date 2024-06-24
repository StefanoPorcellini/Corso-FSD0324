using System;

public class FoodItem //classe per il cibo da vendere
{
    public string Name { get; set; }
    public decimal Price { get; set; }

    public FoodItem (string name, decimal price) // costruttore
    {
        Name = name;
        Price = price;
    }

    public override string ToString() //metodo per convertire il tutto in un'unica stringa
	{
    return $"{Name} (€ {Price})";
	}
}
