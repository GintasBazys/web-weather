import sleet from "assets/icons/sleet.svg";
import clear from "assets/icons/clear.svg";
import heavy_rain from "assets/icons/heavy_rain.svg";
import isolated_clouds from "assets/icons/isolated_clouds.svg";
import light_rain from "assets/icons/light_rain.svg";
import moderate_rain from "assets/icons/moderate_rain.svg";
import moderate_snow from "assets/icons/moderate_snow.svg";
import overcast from "assets/icons/overcast.svg";
import scattered_clouds from "assets/icons/scattered_clouds.svg";

import sleet_white from "assets/icons/sleet_white.svg";
import clear_white from "assets/icons/clear_white.svg";
import heavy_rain_white from "assets/icons/heavy_rain_white.svg";
import isolated_clouds_white from "assets/icons/isolated_clouds_white.svg";
import light_rain_white from "assets/icons/light_rain_white.svg";
import moderate_rain_white from "assets/icons/moderate_rain_white.svg";
import moderate_snow_white from "assets/icons/moderate_snow_white.svg";
import overcast_white from "assets/icons/overcast_white.svg";
import scattered_clouds_white from "assets/icons/scattered_clouds_white.svg";

import sea_level_pressure from "assets/icons/sea_level_pressure.svg";
import total_precitipation from "assets/icons/total_precitipation.svg";
import wind_direction from "assets/icons/wind_direction.svg";
import wind_gust from "assets/icons/wind_gust.svg";
import wind_speed from "assets/icons/wind_speed.svg";
import search_icon from "assets/icons/search_icon.svg";
import cloud_cover from "assets/icons/cloud_cover.svg";

export const icons: Record<
  string,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
> = {
  sleet: sleet,
  clear: clear,
  "heavy-rain": heavy_rain,
  "isolated-clouds": isolated_clouds,
  "light-rain": light_rain,
  "moderate-rain": moderate_rain,
  "moderate-snow": moderate_snow,
  overcast: overcast,
  "scattered-clouds": scattered_clouds,
  sleet_white: sleet_white,
  clear_white: clear_white,
  "heavy-rain_white": heavy_rain_white,
  "isolated-clouds_white": isolated_clouds_white,
  "light-rain_white": light_rain_white,
  "moderate-rain_white": moderate_rain_white,
  "moderate-snow_white": moderate_snow_white,
  overcast_white: overcast_white,
  "scattered-clouds_white": scattered_clouds_white,
  "sea-level-pressure": sea_level_pressure,
  "total-precitipation": total_precitipation,
  "wind-direction": wind_direction,
  "wind-gust": wind_gust,
  "wind-speed": wind_speed,
  "cloud-cover": cloud_cover,
  search_icon,
};
