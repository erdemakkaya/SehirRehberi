using AutoMapper;
using CityGuide.Dtos;
using CityGuide.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CityGuide.Helpers
{
    public class AutoMapperProfiles:Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<City, CityForListDto>()
                .ForMember(dest => dest.PhotoUrl, opt =>
                {
                    opt.MapFrom(src => src.Photos.SingleOrDefault(p=>p.IsMain).Url);
                });
            CreateMap<City, CityForDetailDto>();
            CreateMap<Photo, PhotoForCreationDto>().ReverseMap();
        }
    }
}
