using CityGuide.Entites;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CityGuide.Data
{
    public class AppRepository : IAppRepoistory
    {
        private DataContext _context;
        public AppRepository(DataContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);

        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);

        }

        public List<City> GetCities()
        {
            var cities = _context.Citites.Include(c=>c.Photos).ToList();
            return cities;
        }

        public City GetCityById(int cityId)
        {
            return _context.Citites.Include(c => c.Photos).SingleOrDefault(c => c.Id == cityId);
        }

        public Photo GetPhoto(int id)
        {
            var photo = _context.Photos.SingleOrDefault(p => p.Id == id);
            return photo;
        }

        public List<Photo> GetPhotosByCity(int cityId)
        {
            var photos = _context.Photos.Where(p => p.CityId == cityId).ToList();
            return photos;
        }

        public bool SaveAll()
        {
            return _context.SaveChanges()>0;
        }
    }
}
