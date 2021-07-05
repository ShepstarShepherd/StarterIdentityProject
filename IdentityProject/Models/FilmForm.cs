using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace IdentityProject.Models
{
    public class FilmForm

    {
        [Key]
        public int FilmID { get; set; }

        [Required(ErrorMessage = "All good movies have names")]
        public string FilmTitle { get; set; }

        [Required(ErrorMessage = "All good movies have age rating")]
        public string FilmCertificate { get; set; }

        public string FilmDescription { get; set; }

        public string FilmImage {  get; set;}

        public decimal FilmPrice { get; set; }

        public int Stars { get; set; }

        [DataType(DataType.Date)]
        public DateTime ReleaseDate { get; set; }

    }

}