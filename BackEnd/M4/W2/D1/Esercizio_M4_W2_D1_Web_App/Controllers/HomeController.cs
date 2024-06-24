using Esercizio_M4_W2_D1_Web_App.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Esercizio_M4_W2_D1_Web_App.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            var menu = new List<FoodModel>
        {
                new FoodModel{Name="Coca Cola 150 ml", Price=2.50m},
                new FoodModel{Name="Insalata di pollo", Price=5.20m},
                new FoodModel{Name="Pizza Margherita", Price = 10.00m},
                new FoodModel{Name="Pizza 4 Formaggi", Price=12.50m},
                new FoodModel{Name="Porzione Patatine fritte", Price = 3.50m},
                new FoodModel{Name="Insalata di riso", Price = 8.00m},
                new FoodModel{Name="Frutta di stagione", Price=5.00m},
                new FoodModel{Name="Pizza fritta", Price = 5.00m},
                new FoodModel{Name="Piadina vegetariana", Price=6.00m},
                new FoodModel{Name="Panino Hamburger", Price = 7.90m}
        };
            return View(menu);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
