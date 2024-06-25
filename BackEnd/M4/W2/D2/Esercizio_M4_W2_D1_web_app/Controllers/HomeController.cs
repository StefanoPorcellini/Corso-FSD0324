using Esercizio_M4_W2_D1_web_app.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Esercizio_M4_W2_D1_web_app.Controllers
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
            CV cv = new CV();

            cv.InformazioniPersonali = new InformazioniPersonali
            {
                Nome = "Stefano",
                Cognome = "Porcellini",
                Telefono = "3277111875",
                Email = "stefano.porcellini@icloud.com",
            };

            cv.StudiEffettuati = new List<Studi>
            {
                new Studi
                {
                    Qualifica = "Diploma in Ragioneria",
                    Istituto = "ITC Aterno - Pescara",
                    Tipo = "Diploma di scuola superiore",
                    Dal = new DateTime(1995, 9, 1),
                    Al = new DateTime(1998,6,15)
                }
            };

            cv.Impieghi = new Impiego
            {
                Esperienze = new List<Esperienza>
                {
                    new Esperienza
                    {
                        Azienda = "Laser MUltimedia srl",
                        JobTitle = "Grafico e operatore di stampa digitale",
                        Dal = new DateTime(2002, 4, 1),
                        Al =new DateTime(2020, 3, 10),
                        Descrizione = "Modifica e creazione grafiche per l'invio in stampa digitale sia di piccolo che di grande formato",
                        Compiti = "Utilizzo software grafica Adobe, gestione stampanti laser e plotter, taglio carta, rifiniture sulle stampe (cordonature, plastificazioni, etc.)"
                    },
                    new Esperienza
                    {
                        Azienda = "La Tipografia srls",
                        JobTitle = "Grafico e operatore di stampa digitale",
                        Dal = new DateTime(2022,7, 1),
                        Al =new DateTime(2024, 1, 31),
                        Descrizione = "Modifica e creazione grafiche per l'invio in stampa digitale sia di piccolo che di grande formato",
                        Compiti = "Utilizzo software grafica Adobe, gestione stampanti laser e plotter, taglio carta, rifiniture sulle stampe (cordonature, plastificazioni, etc.)"
                    }

                }
            };

            return View(cv);
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
