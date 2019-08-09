using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CityGuide.Data;
using CityGuide.Dtos;
using CityGuide.Entites;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CityGuide.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CitiesController : ControllerBase
    {
        IAppRepoistory _appRepository;
        private IMapper _mapper;
        public CitiesController(IAppRepoistory appRepoistory,IMapper mapper)
        {
            _appRepository = appRepoistory;
            _mapper = mapper;
        }

        public ActionResult GetCities()
        {
            var cities = _appRepository.GetCities();
            var citiesToReturn = _mapper.Map<List<CityForListDto>>(cities);
            return Ok(citiesToReturn);
        }
        [HttpGet]
        [Route("detail")]
        public ActionResult GetCityById(int id)
        {
            var city = _appRepository.GetCityById(id);
            var cityToReturn = _mapper.Map<CityForDetailDto>(city);
            return Ok(cityToReturn);
        }

        [HttpGet]
        [Route("photos")]
        public ActionResult GetPhotosByCity(int cityId)
        {
            var photos = _appRepository.GetPhotosByCity(cityId);
            return Ok(photos);
        }
        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody]City city)
        {
            _appRepository.Add(city);
            _appRepository.SaveAll();
            return Ok(city);


        }
    }
}