using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AspNetUserRolesEntityFramework.Models;
using AspNetUserRolesEntityFramework.Data;
using Microsoft.EntityFrameworkCore;


namespace AspNetUserRolesEntityFramework.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public async Task<IActionResult> About()
        {
            ViewData["Message"] = "Your application description page.";
            if (!User.Identity.IsAuthenticated)
            {
                foreach (var post in _context.DiscussionForum)
                {
                    post.canIncreaseLike = true;
                }
                await _context.SaveChangesAsync();
            }


            var allDiscussions = from result in _context.DiscussionForum
                                 orderby result.PostDate descending
                                 select result;



            return View(await allDiscussions.ToListAsync());



            // return View(await _context.DiscussionForum.ToListAsync());
        }



        private readonly ApplicationDbContext _context;

        public HomeController(ApplicationDbContext context)
        {
            _context = context;
        }


        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
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
