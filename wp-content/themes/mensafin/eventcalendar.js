$(document).ready(function () {


Boolean.prototype.CompareTo = function(that) {
   return this - that;
};

Number.prototype.CompareTo = function(that) {
   return this - that;
};

String.prototype.CompareTo = function(that) {
   return this > that
      ? 1
      : this < that
         ? -1
         : 0;
};

Array.prototype.CompareTo = function(that) {
   var i = 0;
   while(i < this.length && i < that.length) {
      var diff = this[i].CompareTo(that[i]);
      if(diff != 0) {
         return diff;
      }
      i = i + 1;
   };
   return this.length - that.length;
};

var list_1_Nil, list_1_Cons, i_vevent__ctor, i_notification__ctor, i_mkIEnumerator_1__ctor, i_UnfoldEnumerator_2__ctor, i_Set_1__ctor, i_SetIterator_1__ctor, i_GenericComparer_1__ctor, i_EventMarker__ctor, i_CreateEnumerable_1__ctor, calEvent_Vevent, calEvent_Note, String_Length, Set_Empty, Set_Contains, Set_Add, Set_1_get_Empty, SetTree_1_SetOne, SetTree_1_SetNode, SetTree_1_SetEmpty, SetTreeModule_toList, SetTreeModule_toArray, SetTreeModule_subset, SetTreeModule_spliceOutSuccessor, SetTreeModule_remove, SetTreeModule_rebalance, SetTreeModule_psubset, SetTreeModule_partitionAux, SetTreeModule_partition1, SetTreeModule_partition, SetTreeModule_notStarted, SetTreeModule_moveNext, SetTreeModule_mkIterator, SetTreeModule_mkIEnumerator, SetTreeModule_mk, SetTreeModule_minimumElementOpt, SetTreeModule_minimumElementAux, SetTreeModule_minimumElement, SetTreeModule_mem, SetTreeModule_maximumElementOpt, SetTreeModule_maximumElementAux, SetTreeModule_maximumElement, SetTreeModule_loop, SetTreeModule_iter, SetTreeModule_isEmpty, SetTreeModule_height, SetTreeModule_get_tolerance, SetTreeModule_forall, SetTreeModule_fold, SetTreeModule_filterAux, SetTreeModule_filter, SetTreeModule_exists, SetTreeModule_current, SetTreeModule_countAux, SetTreeModule_count, SetTreeModule_copyToArray, SetTreeModule_compareStacks, SetTreeModule_compare, SetTreeModule_collapseLHS, SetTreeModule_choose, SetTreeModule_alreadyFinished, SetTreeModule_add, SetTreeModule_SetOne, SetTreeModule_SetNode, Seq_Unfold, Seq_TryPickIndexedAux, Seq_TryPickIndexed, Seq_TryFind, Seq_ToList, Seq_ToArray, Seq_Skip, Seq_Scan, Seq_Reduce, Seq_OfList, Seq_OfArray, Seq_MinBy, Seq_Map2, Seq_Map, Seq_Length, Seq_IterateIndexed, Seq_Iterate, Seq_IsEmpty, Seq_Head, Seq_FromFactory, Seq_FoldIndexedAux, Seq_FoldIndexed, Seq_Fold, Seq_Filter, Seq_Enumerator, Seq_DistinctBy, Seq_Distinct, Seq_Delay, Seq_CompareWith, Seq_Choose, Range_oneStep, Range_customStep, Page_parseEventList, Page_op_Dynamic, Page_main, Page_jQuery, Page_fetchNewPosition, Page_asJQuery, Page_VeventsToMarkers, List_Tail, List_Reverse, List_IsEmpty, List_Head, List_FoldIndexedAux, List_FoldIndexed, List_Fold, List_Empty, List_CreateCons, LanguagePrimitives_UnboxGeneric, GoogleMap_showMyPosition, GoogleMap_op_Dynamic, GoogleMap_makeMap, GoogleLatLong_parseGoogleLocation, GoogleLatLong_jQuery, GoogleLatLong_fetchCoordinates, GoogleLatLong_FetchLatLong, GenericConstants_One, EventItem_mydate, EventItem_jsDateFormatToUserDay, EventItem_jsDateFormatToUser, EventItem_jsDateFormatToJson, EventItem_jsDateFormatCalendar, EventItem_items, EventItem_get_items, EventItem_formatDateData, EventItem_fetchQRCodeUrl, DateOrMonth_MonthAndYear, DateOrMonth_FullDate, Array_ZeroCreate, Array_BoxedLength;
  Array_BoxedLength = (function (xs)
  {
    return xs.length;
  });
  Array_ZeroCreate = (function (size)
  {
    return new Array(size);
  });
  DateOrMonth_FullDate = (function (Item)
  {
    this.Tag = "FullDate";
    this.Item = Item;
  });
  DateOrMonth_MonthAndYear = (function (Item)
  {
    this.Tag = "MonthAndYear";
    this.Item = Item;
  });
  EventItem_fetchQRCodeUrl = (function (itm)
  {
    var _temp4;
    var copyOfStruct = 150.000000;
    _temp4 = copyOfStruct.toString();
    var size = _temp4;
    var baseurl = (((("http://chart.apis.google.com/chart?chs=" + size) + "x") + size) + "\u0026cht=qr\u0026choe=UTF-8\u0026chl=");
    if ((itm.Tag == "Note")) 
    {
      var item = itm.Item;
      return (baseurl + encodeURIComponent(item.Info()));
    }
    else
    {
      var _item = itm.Item;
      return (baseurl + encodeURIComponent(_item.iCal()));
    };
  });
  EventItem_formatDateData = (function (md, duration)
  {
    var lz = (function (i)
    {
      if ((i.CompareTo(10.000000) < 0.000000)) 
      {
        return ("0" + i.toString());
      }
      else
      {
        return i.toString();
      };
    });
    var _temp2;
    var copyOfStruct = md.getFullYear();
    _temp2 = copyOfStruct.toString();
    return {CompareTo: (function (that)
    {
      var diff;
      return 0.000000;
    }), Item1: _temp2, Item2: lz((md.getMonth() + 1.000000)), Item3: lz(md.getDate()), Item4: lz((md.getHours() + duration)), Item5: lz(md.getMinutes()), Item6: lz(md.getSeconds())};
  });
  EventItem_get_items = (function ()
  {
    var dsource = document.getElementById("#datasource");
    jQuery(".datacontainer").css("visibility", "hidden");
    jQuery(".datacontainer").css("position", "absolute");
    var trs = dsource.getElementsByTagName("tr");
    var _temp38;
    var mapping = (function (i)
    {
      var tds = trs.item(i).childNodes;
      var s = (function (x)
      {
        return tds.item(x).textContent;
      });
      var v = (function (x)
      {
        return s(x);
      });
      var matchValue = tds.length;
      if ((matchValue.CompareTo(13.000000) == 0.000000)) 
      {
        return (function (arg0)
        {
          return (new calEvent_Vevent(arg0));
        })((new i_vevent__ctor(s(0.000000), s(1.000000), EventItem_mydate(v(2.000000), v(3.000000), v(4.000000), v(5.000000), v(6.000000)), s(7.000000), s(8.000000), s(9.000000), s(10.000000), {CompareTo: (function (that)
        {
          var diff;
          return 0.000000;
        }), Item1: s(11.000000), Item2: s(12.000000)})));
      }
      else
      {
        if ((matchValue.CompareTo(3.000000) == 0.000000)) 
        {
          return (function (arg0)
          {
            return (new calEvent_Note(arg0));
          })((new i_notification__ctor(s(0.000000), s(1.000000), s(2.000000))));
        }
        else
        {
          if ((matchValue.CompareTo(25.000000) == 0.000000)) 
          {
            if ((((String_Length(s(1.000000)).CompareTo(2.000000) < 0.000000) && (String_Length(s(3.000000)).CompareTo(2.000000) < 0.000000)) && (String_Length(s(23.000000)).CompareTo(2.000000) < 0.000000))) 
            {
              return (function (arg0)
              {
                return (new calEvent_Vevent(arg0));
              })((new i_vevent__ctor(s(0.000000), s(2.000000), EventItem_mydate(v(4.000000), v(6.000000), v(8.000000), v(10.000000), v(12.000000)), s(14.000000), s(16.000000), s(18.000000), s(20.000000), {CompareTo: (function (that)
              {
                var diff;
                return 0.000000;
              }), Item1: s(22.000000), Item2: s(24.000000)})));
            }
            else
            {
              if ((matchValue.CompareTo(5.000000) == 0.000000)) 
              {
                if (((String_Length(s(1.000000)).CompareTo(2.000000) < 0.000000) && (String_Length(s(3.000000)).CompareTo(2.000000) < 0.000000))) 
                {
                  return (function (arg0)
                  {
                    return (new calEvent_Note(arg0));
                  })((new i_notification__ctor(s(0.000000), s(2.000000), s(4.000000))));
                }
                else
                {
                  var _temp40;
                  var _temp41;
                  var copyOfStruct = tds.length;
                  _temp41 = copyOfStruct.toString();
                  _temp40 = ("#datasource tablestructure has changed! " + _temp41);
                  throw (_temp40);
                  return null;
                };
              }
              else
              {
                var _temp43;
                var _temp44;
                var _copyOfStruct = tds.length;
                _temp44 = _copyOfStruct.toString();
                _temp43 = ("#datasource tablestructure has changed! " + _temp44);
                throw (_temp43);
                return null;
              };
            };
          }
          else
          {
            if ((matchValue.CompareTo(5.000000) == 0.000000)) 
            {
              if (((String_Length(s(1.000000)).CompareTo(2.000000) < 0.000000) && (String_Length(s(3.000000)).CompareTo(2.000000) < 0.000000))) 
              {
                return (function (arg0)
                {
                  return (new calEvent_Note(arg0));
                })((new i_notification__ctor(s(0.000000), s(2.000000), s(4.000000))));
              }
              else
              {
                var _temp46;
                var _temp47;
                var __copyOfStruct = tds.length;
                _temp47 = __copyOfStruct.toString();
                _temp46 = ("#datasource tablestructure has changed! " + _temp47);
                throw (_temp46);
                return null;
              };
            }
            else
            {
              var _temp49;
              var _temp50;
              var ___copyOfStruct = tds.length;
              _temp50 = ___copyOfStruct.toString();
              _temp49 = ("#datasource tablestructure has changed! " + _temp50);
              throw (_temp49);
              return null;
            };
          };
        };
      };
    });
    _temp38 = (function (source)
    {
      return Seq_Map(mapping, Seq_OfList(source));
    });
    return _temp38(Seq_ToList(Range_oneStep(0.000000, (trs.length - 1.000000))));
  });
  EventItem_jsDateFormatCalendar = (function (mdx)
  {
    if ((mdx.Tag == "FullDate")) 
    {
      var md = mdx.Item;
      var patternInput = EventItem_formatDateData(md, 0.000000);
      var y = patternInput.Item1;
      var s = patternInput.Item6;
      var n = patternInput.Item5;
      var m = patternInput.Item2;
      var h = patternInput.Item4;
      var d = patternInput.Item3;
      return ((((y + "-") + m) + "-") + d);
    }
    else
    {
      var _s = mdx.Item;
      return _s;
    };
  });
  EventItem_jsDateFormatToJson = (function (mdx, duration)
  {
    if ((mdx.Tag == "FullDate")) 
    {
      var md = mdx.Item;
      var patternInput = EventItem_formatDateData(md, duration);
      var y = patternInput.Item1;
      var s = patternInput.Item6;
      var n = patternInput.Item5;
      var m = patternInput.Item2;
      var h = patternInput.Item4;
      var d = patternInput.Item3;
      return ((((((y + m) + d) + "T") + h) + n) + s);
    }
    else
    {
      var _s = mdx.Item;
      return _s;
    };
  });
  EventItem_jsDateFormatToUser = (function (mdx)
  {
    if ((mdx.Tag == "FullDate")) 
    {
      var md = mdx.Item;
      var _temp1;
      var z = md;
      _temp1 = (z.getFullYear().CompareTo(1990.000000) < 0.000000);
      if (_temp1) 
      {
        var _z = md;
        return "";
      }
      else
      {
        var patternInput = EventItem_formatDateData(md, 0.000000);
        var y = patternInput.Item1;
        var s = patternInput.Item6;
        var n = patternInput.Item5;
        var m = patternInput.Item2;
        var h = patternInput.Item4;
        var d = patternInput.Item3;
        return ((((((((d + ".") + m) + ".") + y) + " ") + h) + ".") + n);
      };
    }
    else
    {
      var _s = mdx.Item;
      if ((_s.CompareTo("0.0") == 0.000000)) 
      {
        return "";
      }
      else
      {
        return _s;
      };
    };
  });
  EventItem_jsDateFormatToUserDay = (function (mdx)
  {
    if ((mdx.Tag == "FullDate")) 
    {
      var md = mdx.Item;
      var _temp3;
      var z = md;
      _temp3 = (z.getFullYear().CompareTo(1990.000000) < 0.000000);
      if (_temp3) 
      {
        var _z = md;
        return "";
      }
      else
      {
        var patternInput = EventItem_formatDateData(md, 0.000000);
        var y = patternInput.Item1;
        var s = patternInput.Item6;
        var n = patternInput.Item5;
        var m = patternInput.Item2;
        var h = patternInput.Item4;
        var d = patternInput.Item3;
        return ((((d + ".") + m) + ".") + y);
      };
    }
    else
    {
      var _s = mdx.Item;
      if ((_s.CompareTo("0.0") == 0.000000)) 
      {
        return "";
      }
      else
      {
        return _s;
      };
    };
  });
  EventItem_mydate = (function (y, m, d, h, n)
  {
    if ((d.CompareTo(0.000000) == 0.000000)) 
    {
      return (new DateOrMonth_MonthAndYear(((m.toString() + ".") + y.toString())));
    }
    else
    {
      return (new DateOrMonth_FullDate((new Date(y, (m - 1.000000), d, h, n, 0.000000))));
    };
  });
  GenericConstants_One = (function ()
  {
    return 1;
  });
  GoogleLatLong_FetchLatLong = (function (id, address)
  {
    var result = GoogleLatLong_fetchCoordinates(address, (function (data)
    {
      return GoogleLatLong_parseGoogleLocation(id, data);
    }));
    return result;
  });
  GoogleLatLong_fetchCoordinates = (function (address, callback)
  {
    var settings = {};
    settings.success = (function (data, _arg2, _arg1)
    {
      return callback(data);
    });
    null;
    var url = ("https://maps.googleapis.com/maps/api/geocode/json?sensor=false\u0026address=" + encodeURIComponent(address));
    return jQuery.ajax(url, settings);
  });
  GoogleLatLong_jQuery = (function (command)
  {
    return jQuery(command);
  });
  GoogleLatLong_parseGoogleLocation = (function (id, data)
  {
    var matchValue = Seq_IsEmpty(Seq_OfArray(data.results));
    if (matchValue) 
    {
      return (function (value)
      {
        ;
      })("No results");
    }
    else
    {
      var replies = Seq_Head(Seq_OfArray(data.results));
      var latlon = {CompareTo: (function (that)
      {
        var diff;
        return 0.000000;
      }), Item1: replies.geometry.location.lat, Item2: replies.geometry.location.lng};
      var _temp128;
      var _temp129;
      var copyOfStruct = latlon.Item1;
      _temp129 = copyOfStruct.toString();
      _temp128 = GoogleLatLong_jQuery(("#uLatitude" + id)).val(_temp129);
      (function (value)
      {
        ;
      })(_temp128);
      var _temp131;
      var _temp132;
      var _copyOfStruct = latlon.Item2;
      _temp132 = _copyOfStruct.toString();
      _temp131 = GoogleLatLong_jQuery(("#uLongitude" + id)).val(_temp132);
      (function (value)
      {
        ;
      })(_temp131);
      return window.alert(("Asetettu paikka osoitteelle: " + replies.formatted_address));
    };
  });
  GoogleMap_makeMap = (function (markers)
  {
    var _temp104;
    var _temp105;
    var returnVal = {};
    returnVal.zoom = 4.000000;
    null;
    returnVal.center = (new google.maps.LatLng(65.450000, 25.960000));
    null;
    returnVal.mapTypeControl = true;
    null;
    returnVal.mapTypeId = google.maps.MapTypeId.ROADMAP;
    null;
    _temp105 = returnVal;
    _temp104 = (new google.maps.Map(document.getElementById("mapContainer"), _temp105));
    var map = _temp104;
    var _temp109;
    var action = (function (i)
    {
      var _temp111;
      var _temp112;
      var _returnVal = {};
      _returnVal.clickable = true;
      null;
      _returnVal.draggable = false;
      null;
      _returnVal.flat = true;
      null;
      _returnVal.position = (function (tupledArg)
      {
        var arg00 = tupledArg.Item1;
        var arg01 = tupledArg.Item2;
        return (new google.maps.LatLng(arg00, arg01));
      })(i.Coordinates);
      null;
      _returnVal.map = map;
      null;
      _returnVal.title = i.Title;
      null;
      _temp112 = _returnVal;
      _temp111 = (new google.maps.Marker(_temp112));
      return (function (value)
      {
        ;
      })(_temp111);
    });
    _temp109 = (function (source)
    {
      return Seq_Iterate(action, source);
    });
    _temp109(markers);
    var myTimer = {contents: 0.000000};
    var mapresize = (function (unitVar0)
    {
      var refresh = (function (_unitVar0)
      {
        return google.maps.event.trigger(map, "resize", null);
      });
      clearTimeout(myTimer.contents);
      myTimer.contents = setTimeout(refresh, 1000.000000);
    });
    (function (value)
    {
      ;
    })(GoogleMap_op_Dynamic(jQuery, "mapContainer").bind("resize", mapresize));
    return map;
  });
  GoogleMap_op_Dynamic = (function (jqx, name)
  {
    return jqx(("#" + name));
  });
  GoogleMap_showMyPosition = (function (markers)
  {
    var mymap = GoogleMap_makeMap(markers);
    if ((Modernizr.geolocation && (!Seq_IsEmpty(markers)))) 
    {
      return navigator.geolocation.getCurrentPosition((function (position)
      {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var coords = (new google.maps.LatLng(latitude, longitude));
        var distance = (function (tupledArg)
        {
          var marklat = tupledArg.Item1;
          var marklon = tupledArg.Item2;
          var R = 6371.000000;
          var dLat = (((marklat - latitude) * Math.PI) / 180.000000);
          var dLon = (((marklon - longitude) * Math.PI) / 180.000000);
          var lat1 = ((latitude * Math.PI) / 180.000000);
          var lat2 = ((marklat * Math.PI) / 180.000000);
          var a = ((Math.sin((dLat / 2.000000)) * Math.sin((dLat / 2.000000))) + (((Math.sin((dLon / 2.000000)) * Math.sin((dLon / 2.000000))) * Math.cos(lat1)) * Math.cos(lat2)));
          var c = (2.000000 * Math.atan2(Math.sqrt(a), Math.sqrt((1.000000 - a))));
          return (R * c);
        });
        var _temp118;
        var _temp119;
        var projection = (function (f)
        {
          return f;
        });
        _temp119 = (function (source)
        {
          return Seq_MinBy(projection, source);
        });
        var _temp121;
        var _temp122;
        var mapping = (function (f)
        {
          return distance(f.Coordinates);
        });
        _temp122 = (function (source)
        {
          return Seq_Map(mapping, source);
        });
        _temp121 = _temp122(markers);
        _temp118 = _temp119(_temp121);
        var nearest = _temp118;
        var _temp124;
        var _temp125;
        var predicate = (function (f)
        {
          var d = (distance(f.Coordinates) - nearest);
          return (d.CompareTo(20.000000) < 0.000000);
        });
        _temp125 = (function (source)
        {
          return Seq_Filter(predicate, source);
        });
        _temp124 = _temp125(markers);
        var quiteNear = _temp124;
        var _temp126;
        var action = (function (f)
        {
          return (function (value)
          {
            ;
          })(GoogleMap_op_Dynamic(jQuery, f.Id).attr("class", "myNearEvent"));
        });
        _temp126 = (function (source)
        {
          return Seq_Iterate(action, source);
        });
        return _temp126(quiteNear);
      }));
    }
    else
    {
      ;
    };
  });
  LanguagePrimitives_UnboxGeneric = (function (x)
  {
    return x;
  });
  List_CreateCons = (function (x, xs)
  {
    return (new list_1_Cons(x, xs));
  });
  List_Empty = (function ()
  {
    return (new list_1_Nil());
  });
  List_Fold = (function (f, seed, xs)
  {
    return List_FoldIndexed((function (_arg1)
    {
      return (function (acc)
      {
        return (function (x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
  });
  List_FoldIndexed = (function (f, seed, xs)
  {
    return List_FoldIndexedAux(f, 0.000000, seed, xs);
  });
  List_FoldIndexedAux = (function (f, i, acc, _arg1)
  {
    if ((_arg1.Tag == "Cons")) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List_FoldIndexedAux(f, (i + 1.000000), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
  });
  List_Head = (function (_arg1)
  {
    if ((_arg1.Tag == "Cons")) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return x;
    }
    else
    {
      throw ("List was empty");
      return null;
    };
  });
  List_IsEmpty = (function (_arg1)
  {
    return ((_arg1.Tag == "Nil") && true);
  });
  List_Reverse = (function (xs)
  {
    return List_Fold((function (acc)
    {
      return (function (x)
      {
        return (new list_1_Cons(x, acc));
      });
    }), (new list_1_Nil()), xs);
  });
  List_Tail = (function (_arg1)
  {
    if ((_arg1.Tag == "Cons")) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return xs;
    }
    else
    {
      throw ("List was empty");
      return null;
    };
  });
  Page_VeventsToMarkers = (function (is)
  {
    var _temp82;
    var _temp92;
    var _temp97;
    var _temp98;
    var predicate = (function (i)
    {
      return (i.Id.CompareTo("") != 0.000000);
    });
    _temp98 = (function (source)
    {
      return Seq_Filter(predicate, source);
    });
    var _temp100;
    var _temp101;
    var mapping = (function (i)
    {
      if ((i.Tag == "Vevent")) 
      {
        var z = i.Item;
        return (new i_EventMarker__ctor(z.get_Id(), z.Summary(), z.get_LatLon()));
      }
      else
      {
        return (new i_EventMarker__ctor("", "", {CompareTo: (function (that)
        {
          var diff;
          return 0.000000;
        }), Item1: 0.000000, Item2: 0.000000}));
      };
    });
    _temp101 = (function (source)
    {
      return Seq_Map(mapping, source);
    });
    _temp100 = _temp101(is);
    _temp97 = _temp98(_temp100);
    _temp92 = (function (source)
    {
      return Seq_Distinct(source);
    })(_temp97);
    _temp82 = (function (source)
    {
      return Seq_ToArray(source);
    })(_temp92);
    var retr = _temp82;
    return retr;
  });
  Page_asJQuery = (function (x)
  {
    return x;
  });
  Page_fetchNewPosition = (function (unitVar0)
  {
    (function (value)
    {
      ;
    })(window.alert("Suoritetaan Google-paikannus, jos ei toimi, niin koita uusiksi..."));
    var getval = (function (item)
    {
      return Page_jQuery(("#" + item)).val().toString();
    });
    return GoogleLatLong_FetchLatLong("", ((getval("StreetAddress") + ", ") + getval("City")));
  });
  Page_jQuery = (function (command)
  {
    return jQuery(command);
  });
  Page_main = (function (unitVar0)
  {
    (function (value)
    {
      ;
    })(Page_parseEventList());
    var marks = Page_VeventsToMarkers(EventItem_items);
    GoogleMap_showMyPosition(Seq_OfArray(marks));
    return Page_op_Dynamic(jQuery, "fetchPosBtn").click((function (arg00_)
    {
      return Page_fetchNewPosition();
    }));
  });
  Page_op_Dynamic = (function (jqx, name)
  {
    return jqx(("#" + name));
  });
  Page_parseEventList = (function (unitVar0)
  {
    var lst = Page_op_Dynamic(jQuery, "maineventlist");
    var makedivi = (function (e)
    {
      return (function (c)
      {
        return (function (value)
        {
          ;
        })(Page_asJQuery(c).appendTo(lst));
      })((function (b)
      {
        return Page_asJQuery(b).html((((("\u003cul\u003e\u003cli class=\"timeAndCity\"\u003e" + e.get_Title()) + "\u003c/li\u003e\r\n                                       \u003cli class=\"details\"\u003e") + e.get_Details()) + "\u003c/li\u003e\u003c/ul\u003e\r\n                                       \u003cp class=\"testitPistelinja\"\u003e\u003c/p\u003e"));
      })((function (a)
      {
        return Page_asJQuery(a).attr("id", e.get_Id());
      })(Page_jQuery("\u003cdiv /\u003e").attr("class", "myevent"))));
    });
    var makediv = (function (e)
    {
      return (function (c)
      {
        return (function (value)
        {
          ;
        })(Page_asJQuery(c).appendTo(lst));
      })((function (b)
      {
        return Page_asJQuery(b).html((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((("\r\n            \u003ca id=\"L" + encodeURIComponent(e.get_Id())) + "\"\u003e\r\n            \u003cdiv id=\u0027pop") + encodeURIComponent(e.get_Id())) + "\u0027 title=\u0027Testi\u0027 class=\u0027event testipopup\u0027\u003e\r\n            \u003cul\u003e\r\n            \u003cli class=\"timeAndCity\"\u003e") + EventItem_jsDateFormatToUser(e.get_StarTime())) + " ") + e.get_City()) + "\u003c/li\u003e\r\n            \u003cli class=\"location\"\u003e") + e.get_StreetAddress()) + " \u003cbr /\u003e") + e.get_LocationDetails()) + "\u003c/li\u003e\r\n            \u003cli class=\"info\"\u003e") + e.get_Title()) + ", ") + e.get_Details()) + "\u003c/li\u003e\r\n            \u003c/ul\u003e\u003cdiv class=\"dialogiAlaosa\"\u003e\r\n            \u003cbutton id=\"opener") + e.get_Id()) + "\" class=\"qrButton\"\u003e\u003cimg id=\"openeri") + e.get_Id()) + "\" class=\"qrButton\" src=\"") + Page_jQuery("#LocalizationQrcodeUrl").text().toString()) + "\" alt=\"QR\"/\u003e\u003c/button\u003e\r\n            \u003cbutton id=\"ical") + e.get_Id()) + "\" class=\"icalButton\"\u003e\u003cimg id=\"icali") + e.get_Id()) + "\" class=\"icalButton\" src=\"") + Page_jQuery("#LocalizationIcalUrl").text().toString()) + "\" alt=\"iCal\"/\u003e\u003c/button\u003e\r\n            \u003c/div\u003e\u003c/div\u003e\r\n            \u003ca id=\"op") + encodeURIComponent(e.get_Id())) + "\" href=\"#\"\u003e\u003cul\u003e\r\n            \u003cli class=\"technicaldate\"\u003e") + EventItem_jsDateFormatCalendar(e.get_StarTime())) + "\u003c/li\u003e\r\n            \u003cli class=\"timeAndCity\"\u003e") + EventItem_jsDateFormatToUserDay(e.get_StarTime())) + " ") + e.get_City()) + "\u003c/li\u003e\r\n            \u003c/ul\u003e\u003c/a\u003e\u003cscript type=\"text/javascript\"\u003e\r\n$(function() {\r\n\r\n    $(\"#pop") + encodeURIComponent(e.get_Id())) + "\").dialog({ autoOpen: false });\r\n    $(\"#op") + encodeURIComponent(e.get_Id())) + "\").click(function(){$(\"#pop") + encodeURIComponent(e.get_Id())) + "\").dialog(\"open\");return false;});\r\n    $(\"#opi") + encodeURIComponent(e.get_Id())) + "\").hover(function(){$(\"#opi") + encodeURIComponent(e.get_Id())) + "\").attr(\u0027src\u0027,\u0027") + Page_jQuery("#LocalizationInfoHoverUrl").text().toString()) + "\u0027); }, function() { $(\"#opi") + encodeURIComponent(e.get_Id())) + "\").attr(\u0027src\u0027,\u0027") + Page_jQuery("#LocalizationInfoUrl").text().toString()) + "\u0027);});\r\n    $(\"#openeri") + e.get_Id()) + "\").hover(function(){$(\"#openeri") + e.get_Id()) + "\").attr(\u0027src\u0027,\u0027") + Page_jQuery("#LocalizationQrcodeHoverUrl").text().toString()) + "\u0027); }, function() { $(\"#openeri") + e.get_Id()) + "\").attr(\u0027src\u0027,\u0027") + Page_jQuery("#LocalizationQrcodeUrl").text().toString()) + "\u0027);});\r\n    $(\"#icali") + e.get_Id()) + "\").hover(function(){$(\"#icali") + e.get_Id()) + "\").attr(\u0027src\u0027,\u0027") + Page_jQuery("#LocalizationIcalHoverUrl").text().toString()) + "\u0027); }, function() { $(\"#icali") + e.get_Id()) + "\").attr(\u0027src\u0027,\u0027") + Page_jQuery("#LocalizationIcalUrl").text().toString()) + "\u0027);});\r\n\r\n    $(\"#opener") + e.get_Id()) + "\").click(function() {\r\n        $(\"#iQRCode\").attr(\"src\",\"") + EventItem_fetchQRCodeUrl((new calEvent_Vevent(e)))) + "\");\r\n        $(\"#dialog\").dialog(\"open\");\r\n    });\r\n    $(\"#ical") + e.get_Id()) + "\").click(function() {\r\n        window.open(\"") + Page_jQuery("#IcalPath").text().toString()) + "?itemId=") + (e.get_Id() + "00")) + "\");\r\n    });\r\n});\r\n            \u003c/script\u003e\u003cp class=\"testitPistelinja\"\u003e\u003c/p\u003e\r\n            "));
      })((function (a)
      {
        return Page_asJQuery(a).attr("id", e.get_Id());
      })(Page_jQuery("\u003cdiv /\u003e").attr("class", ("myevent " + EventItem_jsDateFormatCalendar(e.get_StarTime()))))));
    });
    var _temp6;
    var action = (function (i)
    {
      if ((i.Tag == "Note")) 
      {
        var y = i.Item;
        return makedivi(y);
      }
      else
      {
        var x = i.Item;
        return makediv(x);
      };
    });
    _temp6 = (function (source)
    {
      return Seq_Iterate(action, source);
    });
    return _temp6(EventItem_items);
  });
  Range_customStep = (function (first, stepping, last)
  {
    var _temp51;
    var f = (function (x)
    {
      if ((x.CompareTo(last) <= 0.000000)) 
      {
        return {Tag: "Some", Value: {CompareTo: (function (that)
        {
          var diff;
          return 0.000000;
        }), Item1: x, Item2: (x + stepping)}};
      }
      else
      {
        return {Tag: "None"};
      };
    });
    _temp51 = (function (seed)
    {
      return Seq_Unfold(f, seed);
    });
    return _temp51(first);
  });
  Range_oneStep = (function (first, last)
  {
    return Range_customStep(first, GenericConstants_One(), last);
  });
  Seq_Choose = (function (f, xs)
  {
    var trySkipToNext;
    trySkipToNext = (function (_enum)
    {
      if (_enum.MoveNext()) 
      {
        var matchValue = f(_enum.get_Current());
        if ((matchValue.Tag == "Some")) 
        {
          var value = matchValue.Value;
          return {Tag: "Some", Value: {CompareTo: (function (that)
          {
            var diff;
            return 0.000000;
          }), Item1: value, Item2: _enum}};
        }
        else
        {
          return trySkipToNext(_enum);
        };
      }
      else
      {
        return {Tag: "None"};
      };
    });
    return (function (_f)
    {
      return Seq_Delay(_f);
    })((function (unitVar0)
    {
      var _temp54;
      var _f = trySkipToNext;
      _temp54 = (function (seed)
      {
        return Seq_Unfold(_f, seed);
      });
      return _temp54(Seq_Enumerator(xs));
    }));
  });
  Seq_CompareWith = (function (f, xs, ys)
  {
    var _temp33;
    var _temp34;
    var _f = (function (i)
    {
      return (i.CompareTo(0.000000) != 0.000000);
    });
    _temp34 = (function (_xs)
    {
      return Seq_TryFind(_f, _xs);
    });
    _temp33 = _temp34(Seq_Map2((function (x)
    {
      return (function (y)
      {
        return f(x)(y);
      });
    }), xs, ys));
    var nonZero = _temp33;
    if ((nonZero.Tag == "None")) 
    {
      return (Seq_Length(xs) - Seq_Length(ys));
    }
    else
    {
      var diff = nonZero.Value;
      return diff;
    };
  });
  Seq_Delay = (function (f)
  {
    return Seq_FromFactory((function (unitVar0)
    {
      var _temp23;
      var _temp24;
      _temp23 = f(_temp24);
      return Seq_Enumerator(_temp23);
    }));
  });
  Seq_Distinct = (function (xs)
  {
    return Seq_DistinctBy((function (x)
    {
      return x;
    }), xs);
  });
  Seq_DistinctBy = (function (f, xs)
  {
    var _temp55;
    var _f = (function (tuple)
    {
      return tuple.Item1;
    });
    _temp55 = (function (_xs)
    {
      return Seq_Choose(_f, _xs);
    });
    return _temp55(Seq_Scan((function (tupledArg)
    {
      var _arg1 = tupledArg.Item1;
      var acc = tupledArg.Item2;
      return (function (x)
      {
        var y = f(x);
        if ((function (set)
        {
          return Set_Contains(y, set);
        })(acc)) 
        {
          return {CompareTo: (function (that)
          {
            var diff;
            return 0.000000;
          }), Item1: {Tag: "None"}, Item2: acc};
        }
        else
        {
          return {CompareTo: (function (that)
          {
            var diff;
            return 0.000000;
          }), Item1: {Tag: "Some", Value: x}, Item2: (function (set)
          {
            return Set_Add(y, set);
          })(acc)};
        };
      });
    }), {CompareTo: (function (that)
    {
      var diff;
      return 0.000000;
    }), Item1: {Tag: "None"}, Item2: Set_Empty()}, xs));
  });
  Seq_Enumerator = (function (xs)
  {
    return xs.GetEnumerator();
  });
  Seq_Filter = (function (f, xs)
  {
    var trySkipToNext;
    trySkipToNext = (function (_enum)
    {
      if (_enum.MoveNext()) 
      {
        if (f(_enum.get_Current())) 
        {
          return {Tag: "Some", Value: {CompareTo: (function (that)
          {
            var diff;
            return 0.000000;
          }), Item1: _enum.get_Current(), Item2: _enum}};
        }
        else
        {
          return trySkipToNext(_enum);
        };
      }
      else
      {
        return {Tag: "None"};
      };
    });
    return (function (_f)
    {
      return Seq_Delay(_f);
    })((function (unitVar0)
    {
      var _temp62;
      var _f = trySkipToNext;
      _temp62 = (function (seed)
      {
        return Seq_Unfold(_f, seed);
      });
      return _temp62(Seq_Enumerator(xs));
    }));
  });
  Seq_Fold = (function (f, seed, xs)
  {
    return Seq_FoldIndexed((function (_arg1)
    {
      return (function (acc)
      {
        return (function (x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
  });
  Seq_FoldIndexed = (function (f, seed, xs)
  {
    return Seq_FoldIndexedAux(f, 0.000000, seed, Seq_Enumerator(xs));
  });
  Seq_FoldIndexedAux = (function (f, i, acc, xs)
  {
    if (xs.MoveNext()) 
    {
      return Seq_FoldIndexedAux(f, (i + 1.000000), f(i)(acc)(xs.get_Current()), xs);
    }
    else
    {
      return acc;
    };
  });
  Seq_FromFactory = (function (f)
  {
    return (new i_CreateEnumerable_1__ctor(f));
  });
  Seq_Head = (function (xs)
  {
    var enumerator = Seq_Enumerator(xs);
    if (enumerator.MoveNext()) 
    {
      return enumerator.get_Current();
    }
    else
    {
      throw ("Seq was empty");
      return null;
    };
  });
  Seq_IsEmpty = (function (xs)
  {
    return (!Seq_Enumerator(xs).MoveNext());
  });
  Seq_Iterate = (function (f, xs)
  {
    var _temp5;
    return Seq_Fold((function (unitVar0)
    {
      return (function (x)
      {
        return f(x);
      });
    }), _temp5, xs);
  });
  Seq_IterateIndexed = (function (f, xs)
  {
    var _temp52;
    return Seq_FoldIndexed((function (i)
    {
      return (function (unitVar1)
      {
        return (function (x)
        {
          return f(i)(x);
        });
      });
    }), _temp52, xs);
  });
  Seq_Length = (function (xs)
  {
    return Seq_Fold((function (count)
    {
      return (function (_arg1)
      {
        return (count + 1.000000);
      });
    }), 0.000000, xs);
  });
  Seq_Map = (function (f, xs)
  {
    return (function (_f)
    {
      return Seq_Delay(_f);
    })((function (unitVar0)
    {
      var _temp37;
      var _f = (function (_enum)
      {
        if (_enum.MoveNext()) 
        {
          return {Tag: "Some", Value: {CompareTo: (function (that)
          {
            var diff;
            return 0.000000;
          }), Item1: f(_enum.get_Current()), Item2: _enum}};
        }
        else
        {
          return {Tag: "None"};
        };
      });
      _temp37 = (function (seed)
      {
        return Seq_Unfold(_f, seed);
      });
      return _temp37(Seq_Enumerator(xs));
    }));
  });
  Seq_Map2 = (function (f, xs, ys)
  {
    return (function (_f)
    {
      return Seq_Delay(_f);
    })((function (unitVar0)
    {
      var _xs = Seq_Enumerator(xs);
      var _ys = Seq_Enumerator(ys);
      var _temp28;
      var _f = (function (_unitVar0)
      {
        if ((_xs.MoveNext() && _ys.MoveNext())) 
        {
          var _temp30;
          var _temp31;
          _temp30 = {CompareTo: (function (that)
          {
            var diff;
            return 0.000000;
          }), Item1: f(_xs.get_Current())(_ys.get_Current()), Item2: _temp31};
          return {Tag: "Some", Value: _temp30};
        }
        else
        {
          return {Tag: "None"};
        };
      });
      _temp28 = (function (seed)
      {
        return Seq_Unfold(_f, seed);
      });
      var _temp32;
      return _temp28(_temp32);
    }));
  });
  Seq_MinBy = (function (f, xs)
  {
    return Seq_Reduce((function (x)
    {
      return (function (y)
      {
        if ((f(y).CompareTo(f(x)) > 0.000000)) 
        {
          return x;
        }
        else
        {
          return y;
        };
      });
    }), xs);
  });
  Seq_OfArray = (function (xs)
  {
    var _temp102;
    var f = (function (i)
    {
      if ((i.CompareTo(Array_BoxedLength(xs)) < 0.000000)) 
      {
        return {Tag: "Some", Value: {CompareTo: (function (that)
        {
          var diff;
          return 0.000000;
        }), Item1: xs[i], Item2: (i + 1.000000)}};
      }
      else
      {
        return {Tag: "None"};
      };
    });
    _temp102 = (function (seed)
    {
      return Seq_Unfold(f, seed);
    });
    return _temp102(0.000000);
  });
  Seq_OfList = (function (xs)
  {
    var _temp36;
    var f = (function (_arg1)
    {
      if ((_arg1.Tag == "Cons")) 
      {
        var _xs = List_Tail(_arg1);
        var x = List_Head(_arg1);
        return {Tag: "Some", Value: {CompareTo: (function (that)
        {
          var diff;
          return 0.000000;
        }), Item1: x, Item2: _xs}};
      }
      else
      {
        return {Tag: "None"};
      };
    });
    _temp36 = (function (seed)
    {
      return Seq_Unfold(f, seed);
    });
    return _temp36(xs);
  });
  Seq_Reduce = (function (f, xs)
  {
    var first = Seq_Head(xs);
    var rest = Seq_Skip(1.000000, xs);
    return Seq_Fold(f, first, rest);
  });
  Seq_Scan = (function (f, seed, xs)
  {
    return (function (_f)
    {
      return Seq_Delay(_f);
    })((function (unitVar0)
    {
      var _xs = Seq_Enumerator(xs);
      var _temp61;
      var _f = (function (_arg1)
      {
        if ((_arg1.Tag == "Some")) 
        {
          var acc = _arg1.Value;
          if (_xs.MoveNext()) 
          {
            var _acc = f(acc)(_xs.get_Current());
            return {Tag: "Some", Value: {CompareTo: (function (that)
            {
              var diff;
              return 0.000000;
            }), Item1: _acc, Item2: {Tag: "Some", Value: _acc}}};
          }
          else
          {
            return {Tag: "None"};
          };
        }
        else
        {
          return {Tag: "Some", Value: {CompareTo: (function (that)
          {
            var diff;
            return 0.000000;
          }), Item1: seed, Item2: {Tag: "Some", Value: seed}}};
        };
      });
      _temp61 = (function (_seed)
      {
        return Seq_Unfold(_f, _seed);
      });
      return _temp61({Tag: "None"});
    }));
  });
  Seq_Skip = (function (n, xs)
  {
    return Seq_FromFactory((function (unitVar0)
    {
      var _enum = Seq_Enumerator(xs);
      for (var _temp113 = 1.000000; _temp113 <= n; _temp113++)
      {
        (function (i)
        {
          (function (value)
          {
            ;
          })(_enum.MoveNext());
        })(_temp113);
      };
      return _enum;
    }));
  });
  Seq_ToArray = (function (xs)
  {
    var ys = Array_ZeroCreate(Seq_Length(xs));
    var _temp53;
    var f = (function (i)
    {
      return (function (x)
      {
        ys[i] = x;
        return null;
      });
    });
    _temp53 = (function (_xs)
    {
      return Seq_IterateIndexed(f, _xs);
    });
    _temp53(xs);
    return ys;
  });
  Seq_ToList = (function (xs)
  {
    return (function (list)
    {
      return List_Reverse(list);
    })(Seq_Fold((function (acc)
    {
      return (function (x)
      {
        return List_CreateCons(x, acc);
      });
    }), List_Empty(), xs));
  });
  Seq_TryFind = (function (f, xs)
  {
    return Seq_TryPickIndexed((function (_arg1)
    {
      return (function (x)
      {
        if (f(x)) 
        {
          return {Tag: "Some", Value: x};
        }
        else
        {
          return {Tag: "None"};
        };
      });
    }), xs);
  });
  Seq_TryPickIndexed = (function (f, xs)
  {
    return Seq_TryPickIndexedAux(f, 0.000000, Seq_Enumerator(xs));
  });
  Seq_TryPickIndexedAux = (function (f, i, xs)
  {
    if (xs.MoveNext()) 
    {
      var result = f(i)(xs.get_Current());
      if ((result.Tag == "None")) 
      {
        return Seq_TryPickIndexedAux(f, (i + 1.000000), xs);
      }
      else
      {
        return result;
      };
    }
    else
    {
      return {Tag: "None"};
    };
  });
  Seq_Unfold = (function (f, seed)
  {
    return Seq_FromFactory((function (unitVar0)
    {
      return (new i_UnfoldEnumerator_2__ctor(seed, f));
    }));
  });
  SetTreeModule_SetNode = (function (x, l, r, h)
  {
    return (new SetTree_1_SetNode(x, l, r, h));
  });
  SetTreeModule_SetOne = (function (n)
  {
    return (new SetTree_1_SetOne(n));
  });
  SetTreeModule_add = (function (comparer, k, t)
  {
    if ((t.Tag == "SetOne")) 
    {
      var k2 = t.Item;
      var c = comparer.Compare(k, k2);
      if ((c.CompareTo(0.000000) < 0.000000)) 
      {
        return SetTreeModule_SetNode(k, (new SetTree_1_SetEmpty()), t, 2.000000);
      }
      else
      {
        if ((c.CompareTo(0.000000) == 0.000000)) 
        {
          return t;
        }
        else
        {
          return SetTreeModule_SetNode(k, t, (new SetTree_1_SetEmpty()), 2.000000);
        };
      };
    }
    else
    {
      if ((t.Tag == "SetEmpty")) 
      {
        return SetTreeModule_SetOne(k);
      }
      else
      {
        var r = t.Item3;
        var l = t.Item2;
        var _k2 = t.Item1;
        var _c = comparer.Compare(k, _k2);
        if ((_c.CompareTo(0.000000) < 0.000000)) 
        {
          return SetTreeModule_rebalance(SetTreeModule_add(comparer, k, l), _k2, r);
        }
        else
        {
          if ((_c.CompareTo(0.000000) == 0.000000)) 
          {
            return t;
          }
          else
          {
            return SetTreeModule_rebalance(l, _k2, SetTreeModule_add(comparer, k, r));
          };
        };
      };
    };
  });
  SetTreeModule_alreadyFinished = (function (unitVar0)
  {
    throw ("Enumeration already started");
    return null;
  });
  SetTreeModule_choose = (function (s)
  {
    return SetTreeModule_minimumElement(s);
  });
  SetTreeModule_collapseLHS = (function (stack)
  {
    if ((stack.Tag == "Cons")) 
    {
      if ((List_Head(stack).Tag == "SetOne")) 
      {
        return stack;
      }
      else
      {
        if ((List_Head(stack).Tag == "SetNode")) 
        {
          var k = List_Head(stack).Item1;
          var l = List_Head(stack).Item2;
          var r = List_Head(stack).Item3;
          var rest = List_Tail(stack);
          return SetTreeModule_collapseLHS(List_CreateCons(l, List_CreateCons(SetTreeModule_SetOne(k), List_CreateCons(r, rest))));
        }
        else
        {
          var _rest = List_Tail(stack);
          return SetTreeModule_collapseLHS(_rest);
        };
      };
    }
    else
    {
      return List_Empty();
    };
  });
  SetTreeModule_compare = (function (comparer, s1, s2)
  {
    var matchValue = {CompareTo: (function (that)
    {
      var diff;
      return 0.000000;
    }), Item1: s1, Item2: s2};
    if ((matchValue.Item1.Tag == "SetEmpty")) 
    {
      if ((matchValue.Item2.Tag == "SetEmpty")) 
      {
        return 0.000000;
      }
      else
      {
        return -1.000000;
      };
    }
    else
    {
      if ((matchValue.Item2.Tag == "SetEmpty")) 
      {
        return 1.000000;
      }
      else
      {
        return SetTreeModule_compareStacks(comparer, List_CreateCons(s1, List_Empty()), List_CreateCons(s2, List_Empty()));
      };
    };
  });
  SetTreeModule_compareStacks = (function (comparer, l1, l2)
  {
    var matchValue = {CompareTo: (function (that)
    {
      var diff;
      return 0.000000;
    }), Item1: l1, Item2: l2};
    if ((matchValue.Item1.Tag == "Cons")) 
    {
      if ((matchValue.Item2.Tag == "Cons")) 
      {
        if ((List_Head(matchValue.Item2).Tag == "SetOne")) 
        {
          if ((List_Head(matchValue.Item1).Tag == "SetOne")) 
          {
            var n1k = List_Head(matchValue.Item1).Item;
            var n2k = List_Head(matchValue.Item2).Item;
            var t1 = List_Tail(matchValue.Item1);
            var t2 = List_Tail(matchValue.Item2);
            var c = comparer.Compare(n1k, n2k);
            if ((c.CompareTo(0.000000) != 0.000000)) 
            {
              return c;
            }
            else
            {
              return SetTreeModule_compareStacks(comparer, t1, t2);
            };
          }
          else
          {
            if ((List_Head(matchValue.Item1).Tag == "SetNode")) 
            {
              if ((List_Head(matchValue.Item1).Item2.Tag == "SetEmpty")) 
              {
                var emp = List_Head(matchValue.Item1).Item2;
                var _n1k = List_Head(matchValue.Item1).Item1;
                var n1r = List_Head(matchValue.Item1).Item3;
                var _n2k = List_Head(matchValue.Item2).Item;
                var _t1 = List_Tail(matchValue.Item1);
                var _t2 = List_Tail(matchValue.Item2);
                var _c = comparer.Compare(_n1k, _n2k);
                if ((_c.CompareTo(0.000000) != 0.000000)) 
                {
                  return _c;
                }
                else
                {
                  return SetTreeModule_compareStacks(comparer, List_CreateCons(n1r, _t1), List_CreateCons(emp, _t2));
                };
              }
              else
              {
                var __n1k = List_Head(matchValue.Item1).Item1;
                var n1l = List_Head(matchValue.Item1).Item2;
                var _n1r = List_Head(matchValue.Item1).Item3;
                var __t1 = List_Tail(matchValue.Item1);
                return SetTreeModule_compareStacks(comparer, List_CreateCons(n1l, List_CreateCons(SetTreeModule_SetNode(__n1k, (new SetTree_1_SetEmpty()), _n1r, 0.000000), __t1)), l2);
              };
            }
            else
            {
              var __n2k = List_Head(matchValue.Item2).Item;
              var __t2 = List_Tail(matchValue.Item2);
              return SetTreeModule_compareStacks(comparer, l1, List_CreateCons((new SetTree_1_SetEmpty()), List_CreateCons(SetTreeModule_SetOne(__n2k), __t2)));
            };
          };
        }
        else
        {
          if ((List_Head(matchValue.Item2).Tag == "SetNode")) 
          {
            if ((List_Head(matchValue.Item2).Item2.Tag == "SetEmpty")) 
            {
              if ((List_Head(matchValue.Item1).Tag == "SetOne")) 
              {
                var ___n1k = List_Head(matchValue.Item1).Item;
                var ___n2k = List_Head(matchValue.Item2).Item1;
                var n2r = List_Head(matchValue.Item2).Item3;
                var ___t1 = List_Tail(matchValue.Item1);
                var ___t2 = List_Tail(matchValue.Item2);
                var __c = comparer.Compare(___n1k, ___n2k);
                if ((__c.CompareTo(0.000000) != 0.000000)) 
                {
                  return __c;
                }
                else
                {
                  return SetTreeModule_compareStacks(comparer, List_CreateCons((new SetTree_1_SetEmpty()), ___t1), List_CreateCons(n2r, ___t2));
                };
              }
              else
              {
                if ((List_Head(matchValue.Item1).Tag == "SetNode")) 
                {
                  if ((List_Head(matchValue.Item1).Item2.Tag == "SetEmpty")) 
                  {
                    var ____n1k = List_Head(matchValue.Item1).Item1;
                    var __n1r = List_Head(matchValue.Item1).Item3;
                    var ____n2k = List_Head(matchValue.Item2).Item1;
                    var _n2r = List_Head(matchValue.Item2).Item3;
                    var ____t1 = List_Tail(matchValue.Item1);
                    var ____t2 = List_Tail(matchValue.Item2);
                    var ___c = comparer.Compare(____n1k, ____n2k);
                    if ((___c.CompareTo(0.000000) != 0.000000)) 
                    {
                      return ___c;
                    }
                    else
                    {
                      return SetTreeModule_compareStacks(comparer, List_CreateCons(__n1r, ____t1), List_CreateCons(_n2r, ____t2));
                    };
                  }
                  else
                  {
                    var _____n1k = List_Head(matchValue.Item1).Item1;
                    var _n1l = List_Head(matchValue.Item1).Item2;
                    var ___n1r = List_Head(matchValue.Item1).Item3;
                    var _____t1 = List_Tail(matchValue.Item1);
                    return SetTreeModule_compareStacks(comparer, List_CreateCons(_n1l, List_CreateCons(SetTreeModule_SetNode(_____n1k, (new SetTree_1_SetEmpty()), ___n1r, 0.000000), _____t1)), l2);
                  };
                }
                else
                {
                  var _____n2k = List_Head(matchValue.Item2).Item1;
                  var n2l = List_Head(matchValue.Item2).Item2;
                  var __n2r = List_Head(matchValue.Item2).Item3;
                  var _____t2 = List_Tail(matchValue.Item2);
                  return SetTreeModule_compareStacks(comparer, l1, List_CreateCons(n2l, List_CreateCons(SetTreeModule_SetNode(_____n2k, (new SetTree_1_SetEmpty()), __n2r, 0.000000), _____t2)));
                };
              };
            }
            else
            {
              if ((List_Head(matchValue.Item1).Tag == "SetOne")) 
              {
                var ______n1k = List_Head(matchValue.Item1).Item;
                var ______t1 = List_Tail(matchValue.Item1);
                return SetTreeModule_compareStacks(comparer, List_CreateCons((new SetTree_1_SetEmpty()), List_CreateCons(SetTreeModule_SetOne(______n1k), ______t1)), l2);
              }
              else
              {
                if ((List_Head(matchValue.Item1).Tag == "SetNode")) 
                {
                  var _______n1k = List_Head(matchValue.Item1).Item1;
                  var __n1l = List_Head(matchValue.Item1).Item2;
                  var ____n1r = List_Head(matchValue.Item1).Item3;
                  var _______t1 = List_Tail(matchValue.Item1);
                  return SetTreeModule_compareStacks(comparer, List_CreateCons(__n1l, List_CreateCons(SetTreeModule_SetNode(_______n1k, (new SetTree_1_SetEmpty()), ____n1r, 0.000000), _______t1)), l2);
                }
                else
                {
                  var ______n2k = List_Head(matchValue.Item2).Item1;
                  var _n2l = List_Head(matchValue.Item2).Item2;
                  var ___n2r = List_Head(matchValue.Item2).Item3;
                  var ______t2 = List_Tail(matchValue.Item2);
                  return SetTreeModule_compareStacks(comparer, l1, List_CreateCons(_n2l, List_CreateCons(SetTreeModule_SetNode(______n2k, (new SetTree_1_SetEmpty()), ___n2r, 0.000000), ______t2)));
                };
              };
            };
          }
          else
          {
            if ((List_Head(matchValue.Item1).Tag == "SetOne")) 
            {
              var ________n1k = List_Head(matchValue.Item1).Item;
              var ________t1 = List_Tail(matchValue.Item1);
              return SetTreeModule_compareStacks(comparer, List_CreateCons((new SetTree_1_SetEmpty()), List_CreateCons(SetTreeModule_SetOne(________n1k), ________t1)), l2);
            }
            else
            {
              if ((List_Head(matchValue.Item1).Tag == "SetNode")) 
              {
                var _________n1k = List_Head(matchValue.Item1).Item1;
                var ___n1l = List_Head(matchValue.Item1).Item2;
                var _____n1r = List_Head(matchValue.Item1).Item3;
                var _________t1 = List_Tail(matchValue.Item1);
                return SetTreeModule_compareStacks(comparer, List_CreateCons(___n1l, List_CreateCons(SetTreeModule_SetNode(_________n1k, (new SetTree_1_SetEmpty()), _____n1r, 0.000000), _________t1)), l2);
              }
              else
              {
                var __________t1 = List_Tail(matchValue.Item1);
                var _______t2 = List_Tail(matchValue.Item2);
                return SetTreeModule_compareStacks(comparer, __________t1, _______t2);
              };
            };
          };
        };
      }
      else
      {
        return 1.000000;
      };
    }
    else
    {
      if ((matchValue.Item2.Tag == "Cons")) 
      {
        return -1.000000;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  SetTreeModule_copyToArray = (function (s, arr, i)
  {
    var j = {contents: i};
    return SetTreeModule_iter((function (x)
    {
      arr[j.contents] = x;
      null;
      j.contents = (j.contents + 1.000000);
    }), s);
  });
  SetTreeModule_count = (function (s)
  {
    return SetTreeModule_countAux(s, 0.000000);
  });
  SetTreeModule_countAux = (function (s, acc)
  {
    if ((s.Tag == "SetOne")) 
    {
      return (acc + 1.000000);
    }
    else
    {
      if ((s.Tag == "SetEmpty")) 
      {
        return acc;
      }
      else
      {
        var r = s.Item3;
        var l = s.Item2;
        return SetTreeModule_countAux(l, SetTreeModule_countAux(r, (acc + 1.000000)));
      };
    };
  });
  SetTreeModule_current = (function (i)
  {
    if (i.started) 
    {
      var matchValue = i.stack;
      if ((matchValue.Tag == "Empty")) 
      {
        return SetTreeModule_alreadyFinished();
      }
      else
      {
        if ((List_Head(matchValue).Tag == "SetOne")) 
        {
          var k = List_Head(matchValue).Item;
          return k;
        }
        else
        {
          throw ("Please report error: Set iterator, unexpected stack for current");
          return null;
        };
      };
    }
    else
    {
      return SetTreeModule_notStarted();
    };
  });
  SetTreeModule_exists = (function (f, m)
  {
    if ((m.Tag == "SetOne")) 
    {
      var k2 = m.Item;
      return f(k2);
    }
    else
    {
      if ((m.Tag == "SetEmpty")) 
      {
        return false;
      }
      else
      {
        var r = m.Item3;
        var l = m.Item2;
        var _k2 = m.Item1;
        return ((f(_k2) || (function ()
        {
          return SetTreeModule_exists(f, l);
        })()) || (function ()
        {
          return SetTreeModule_exists(f, r);
        })());
      };
    };
  });
  SetTreeModule_filter = (function (comparer, f, s)
  {
    return SetTreeModule_filterAux(comparer, f, s, (new SetTree_1_SetEmpty()));
  });
  SetTreeModule_filterAux = (function (comparer, f, s, acc)
  {
    if ((s.Tag == "SetOne")) 
    {
      var k = s.Item;
      if (f(k)) 
      {
        return SetTreeModule_add(comparer, k, acc);
      }
      else
      {
        return acc;
      };
    }
    else
    {
      if ((s.Tag == "SetEmpty")) 
      {
        return acc;
      }
      else
      {
        var r = s.Item3;
        var l = s.Item2;
        var _k = s.Item1;
        var _temp60;
        if (f(_k)) 
        {
          _temp60 = SetTreeModule_add(comparer, _k, acc);
        }
        else
        {
          _temp60 = acc;
        };
        var _acc = _temp60;
        return SetTreeModule_filterAux(comparer, f, l, SetTreeModule_filterAux(comparer, f, r, _acc));
      };
    };
  });
  SetTreeModule_fold = (function (f, x, m)
  {
    if ((m.Tag == "SetOne")) 
    {
      var k = m.Item;
      return f(x)(k);
    }
    else
    {
      if ((m.Tag == "SetEmpty")) 
      {
        return x;
      }
      else
      {
        var r = m.Item3;
        var l = m.Item2;
        var _k = m.Item1;
        var _x = SetTreeModule_fold(f, x, l);
        var __x = f(_x)(_k);
        return SetTreeModule_fold(f, __x, r);
      };
    };
  });
  SetTreeModule_forall = (function (f, m)
  {
    if ((m.Tag == "SetOne")) 
    {
      var k2 = m.Item;
      return f(k2);
    }
    else
    {
      return ((m.Tag == "SetEmpty") || (function ()
      {
        var r = m.Item3;
        var l = m.Item2;
        var _k2 = m.Item1;
        return ((f(_k2) && SetTreeModule_forall(f, l)) && SetTreeModule_forall(f, r));
      })());
    };
  });
  SetTreeModule_get_tolerance = (function ()
  {
    return 2.000000;
  });
  SetTreeModule_height = (function (t)
  {
    if ((t.Tag == "SetOne")) 
    {
      return 1.000000;
    }
    else
    {
      if ((t.Tag == "SetNode")) 
      {
        var h = t.Item4;
        return h;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  SetTreeModule_isEmpty = (function (m)
  {
    return ((m.Tag == "SetEmpty") && true);
  });
  SetTreeModule_iter = (function (f, t)
  {
    if ((t.Tag == "SetOne")) 
    {
      var k2 = t.Item;
      return f(k2);
    }
    else
    {
      if ((t.Tag == "SetEmpty")) 
      {
        ;
      }
      else
      {
        var r = t.Item3;
        var l = t.Item2;
        var _k2 = t.Item1;
        SetTreeModule_iter(f, l);
        f(_k2);
        return SetTreeModule_iter(f, r);
      };
    };
  });
  SetTreeModule_loop = (function (m, acc)
  {
    if ((m.Tag == "SetOne")) 
    {
      var k = m.Item;
      return List_CreateCons(k, acc);
    }
    else
    {
      if ((m.Tag == "SetEmpty")) 
      {
        return acc;
      }
      else
      {
        var r = m.Item3;
        var l = m.Item2;
        var _k = m.Item1;
        return SetTreeModule_loop(l, List_CreateCons(_k, SetTreeModule_loop(r, acc)));
      };
    };
  });
  SetTreeModule_maximumElement = (function (s)
  {
    var matchValue = SetTreeModule_maximumElementOpt(s);
    if ((matchValue.Tag == "None")) 
    {
      throw ("Set contains no elements");
      return null;
    }
    else
    {
      var k = matchValue.Value;
      return k;
    };
  });
  SetTreeModule_maximumElementAux = (function (s, n)
  {
    if ((s.Tag == "SetOne")) 
    {
      var k = s.Item;
      return k;
    }
    else
    {
      if ((s.Tag == "SetEmpty")) 
      {
        return n;
      }
      else
      {
        var r = s.Item3;
        var _k = s.Item1;
        return SetTreeModule_maximumElementAux(r, _k);
      };
    };
  });
  SetTreeModule_maximumElementOpt = (function (s)
  {
    if ((s.Tag == "SetOne")) 
    {
      var k = s.Item;
      return {Tag: "Some", Value: k};
    }
    else
    {
      if ((s.Tag == "SetEmpty")) 
      {
        return {Tag: "None"};
      }
      else
      {
        var r = s.Item3;
        var _k = s.Item1;
        return {Tag: "Some", Value: SetTreeModule_maximumElementAux(r, _k)};
      };
    };
  });
  SetTreeModule_mem = (function (comparer, k, t)
  {
    if ((t.Tag == "SetOne")) 
    {
      var k2 = t.Item;
      return (comparer.Compare(k, k2).CompareTo(0.000000) == 0.000000);
    }
    else
    {
      if ((t.Tag == "SetEmpty")) 
      {
        return false;
      }
      else
      {
        var r = t.Item3;
        var l = t.Item2;
        var _k2 = t.Item1;
        var c = comparer.Compare(k, _k2);
        if ((c.CompareTo(0.000000) < 0.000000)) 
        {
          return SetTreeModule_mem(comparer, k, l);
        }
        else
        {
          return ((c.CompareTo(0.000000) == 0.000000) || (function ()
          {
            return SetTreeModule_mem(comparer, k, r);
          })());
        };
      };
    };
  });
  SetTreeModule_minimumElement = (function (s)
  {
    var matchValue = SetTreeModule_minimumElementOpt(s);
    if ((matchValue.Tag == "None")) 
    {
      throw ("Set contains no elements");
      return null;
    }
    else
    {
      var k = matchValue.Value;
      return k;
    };
  });
  SetTreeModule_minimumElementAux = (function (s, n)
  {
    if ((s.Tag == "SetOne")) 
    {
      var k = s.Item;
      return k;
    }
    else
    {
      if ((s.Tag == "SetEmpty")) 
      {
        return n;
      }
      else
      {
        var l = s.Item2;
        var _k = s.Item1;
        return SetTreeModule_minimumElementAux(l, _k);
      };
    };
  });
  SetTreeModule_minimumElementOpt = (function (s)
  {
    if ((s.Tag == "SetOne")) 
    {
      var k = s.Item;
      return {Tag: "Some", Value: k};
    }
    else
    {
      if ((s.Tag == "SetEmpty")) 
      {
        return {Tag: "None"};
      }
      else
      {
        var l = s.Item2;
        var _k = s.Item1;
        return {Tag: "Some", Value: SetTreeModule_minimumElementAux(l, _k)};
      };
    };
  });
  SetTreeModule_mk = (function (l, k, r)
  {
    var matchValue = {CompareTo: (function (that)
    {
      var diff;
      return 0.000000;
    }), Item1: l, Item2: r};
    if ((matchValue.Item1.Tag == "SetEmpty")) 
    {
      if ((matchValue.Item2.Tag == "SetEmpty")) 
      {
        return SetTreeModule_SetOne(k);
      }
      else
      {
        var hl = SetTreeModule_height(l);
        var hr = SetTreeModule_height(r);
        var _temp56;
        if ((hl.CompareTo(hr) < 0.000000)) 
        {
          _temp56 = hr;
        }
        else
        {
          _temp56 = hl;
        };
        var m = _temp56;
        return SetTreeModule_SetNode(k, l, r, (m + 1.000000));
      };
    }
    else
    {
      var _hl = SetTreeModule_height(l);
      var _hr = SetTreeModule_height(r);
      var _temp57;
      if ((_hl.CompareTo(_hr) < 0.000000)) 
      {
        _temp57 = _hr;
      }
      else
      {
        _temp57 = _hl;
      };
      var _m = _temp57;
      return SetTreeModule_SetNode(k, l, r, (_m + 1.000000));
    };
  });
  SetTreeModule_mkIEnumerator = (function (s)
  {
    return (new i_mkIEnumerator_1__ctor(s));
  });
  SetTreeModule_mkIterator = (function (s)
  {
    return (new i_SetIterator_1__ctor(SetTreeModule_collapseLHS(List_CreateCons(s, List_Empty())), false));
  });
  SetTreeModule_moveNext = (function (i)
  {
    if (i.started) 
    {
      var matchValue = i.stack;
      if ((matchValue.Tag == "Empty")) 
      {
        return false;
      }
      else
      {
        if ((List_Head(matchValue).Tag == "SetOne")) 
        {
          var rest = List_Tail(matchValue);
          i.stack = SetTreeModule_collapseLHS(rest);
          null;
          return (!List_IsEmpty(i.stack));
        }
        else
        {
          throw ("Please report error: Set iterator, unexpected stack for moveNext");
          return null;
        };
      };
    }
    else
    {
      i.started = true;
      null;
      return (!List_IsEmpty(i.stack));
    };
  });
  SetTreeModule_notStarted = (function (unitVar0)
  {
    throw ("Enumeration not started");
    return null;
  });
  SetTreeModule_partition = (function (comparer, f, s)
  {
    var seed = {CompareTo: (function (that)
    {
      var diff;
      return 0.000000;
    }), Item1: (new SetTree_1_SetEmpty()), Item2: (new SetTree_1_SetEmpty())};
    var arg30_ = seed.Item1;
    var arg31_ = seed.Item2;
    return SetTreeModule_partitionAux(comparer, f, s, arg30_, arg31_);
  });
  SetTreeModule_partition1 = (function (comparer, f, k, acc1, acc2)
  {
    if (f(k)) 
    {
      return {CompareTo: (function (that)
      {
        var diff;
        return 0.000000;
      }), Item1: SetTreeModule_add(comparer, k, acc1), Item2: acc2};
    }
    else
    {
      return {CompareTo: (function (that)
      {
        var diff;
        return 0.000000;
      }), Item1: acc1, Item2: SetTreeModule_add(comparer, k, acc2)};
    };
  });
  SetTreeModule_partitionAux = (function (comparer, f, s, acc_0, acc_1)
  {
    var acc = {CompareTo: (function (that)
    {
      var diff;
      return 0.000000;
    }), Item1: acc_0, Item2: acc_1};
    if ((s.Tag == "SetOne")) 
    {
      var k = s.Item;
      var acc1 = acc.Item1;
      var acc2 = acc.Item2;
      return SetTreeModule_partition1(comparer, f, k, acc1, acc2);
    }
    else
    {
      if ((s.Tag == "SetEmpty")) 
      {
        return acc;
      }
      else
      {
        var r = s.Item3;
        var l = s.Item2;
        var _k = s.Item1;
        var _temp58;
        var arg30_ = acc.Item1;
        var arg31_ = acc.Item2;
        _temp58 = SetTreeModule_partitionAux(comparer, f, r, arg30_, arg31_);
        var _acc = _temp58;
        var _temp59;
        var _acc1 = _acc.Item1;
        var _acc2 = _acc.Item2;
        _temp59 = SetTreeModule_partition1(comparer, f, _k, _acc1, _acc2);
        var __acc = _temp59;
        var _arg30_ = __acc.Item1;
        var _arg31_ = __acc.Item2;
        return SetTreeModule_partitionAux(comparer, f, l, _arg30_, _arg31_);
      };
    };
  });
  SetTreeModule_psubset = (function (comparer, a, b)
  {
    return (SetTreeModule_forall((function (x)
    {
      return SetTreeModule_mem(comparer, x, b);
    }), a) && SetTreeModule_exists((function (x)
    {
      return (!SetTreeModule_mem(comparer, x, a));
    }), b));
  });
  SetTreeModule_rebalance = (function (t1, k, t2)
  {
    var t1h = SetTreeModule_height(t1);
    var t2h = SetTreeModule_height(t2);
    if ((t2h.CompareTo((t1h + SetTreeModule_get_tolerance())) > 0.000000)) 
    {
      if ((t2.Tag == "SetNode")) 
      {
        var t2r = t2.Item3;
        var t2l = t2.Item2;
        var t2k = t2.Item1;
        if ((SetTreeModule_height(t2l).CompareTo((t1h + 1.000000)) > 0.000000)) 
        {
          if ((t2l.Tag == "SetNode")) 
          {
            var t2lr = t2l.Item3;
            var t2ll = t2l.Item2;
            var t2lk = t2l.Item1;
            return SetTreeModule_mk(SetTreeModule_mk(t1, k, t2ll), t2lk, SetTreeModule_mk(t2lr, t2k, t2r));
          }
          else
          {
            throw ("rebalance");
            return null;
          };
        }
        else
        {
          return SetTreeModule_mk(SetTreeModule_mk(t1, k, t2l), t2k, t2r);
        };
      }
      else
      {
        throw ("rebalance");
        return null;
      };
    }
    else
    {
      if ((t1h.CompareTo((t2h + SetTreeModule_get_tolerance())) > 0.000000)) 
      {
        if ((t1.Tag == "SetNode")) 
        {
          var t1r = t1.Item3;
          var t1l = t1.Item2;
          var t1k = t1.Item1;
          if ((SetTreeModule_height(t1r).CompareTo((t2h + 1.000000)) > 0.000000)) 
          {
            if ((t1r.Tag == "SetNode")) 
            {
              var t1rr = t1r.Item3;
              var t1rl = t1r.Item2;
              var t1rk = t1r.Item1;
              return SetTreeModule_mk(SetTreeModule_mk(t1l, t1k, t1rl), t1rk, SetTreeModule_mk(t1rr, k, t2));
            }
            else
            {
              throw ("rebalance");
              return null;
            };
          }
          else
          {
            return SetTreeModule_mk(t1l, t1k, SetTreeModule_mk(t1r, k, t2));
          };
        }
        else
        {
          throw ("rebalance");
          return null;
        };
      }
      else
      {
        return SetTreeModule_mk(t1, k, t2);
      };
    };
  });
  SetTreeModule_remove = (function (comparer, k, t)
  {
    if ((t.Tag == "SetOne")) 
    {
      var k2 = t.Item;
      var c = comparer.Compare(k, k2);
      if ((c.CompareTo(0.000000) == 0.000000)) 
      {
        return (new SetTree_1_SetEmpty());
      }
      else
      {
        return t;
      };
    }
    else
    {
      if ((t.Tag == "SetNode")) 
      {
        var r = t.Item3;
        var l = t.Item2;
        var _k2 = t.Item1;
        var _c = comparer.Compare(k, _k2);
        if ((_c.CompareTo(0.000000) < 0.000000)) 
        {
          return SetTreeModule_rebalance(SetTreeModule_remove(comparer, k, l), _k2, r);
        }
        else
        {
          if ((_c.CompareTo(0.000000) == 0.000000)) 
          {
            var matchValue = {CompareTo: (function (that)
            {
              var diff;
              return 0.000000;
            }), Item1: l, Item2: r};
            if ((matchValue.Item1.Tag == "SetEmpty")) 
            {
              return r;
            }
            else
            {
              if ((matchValue.Item2.Tag == "SetEmpty")) 
              {
                return l;
              }
              else
              {
                var patternInput = SetTreeModule_spliceOutSuccessor(r);
                var sk = patternInput.Item1;
                var r_ = patternInput.Item2;
                return SetTreeModule_mk(l, sk, r_);
              };
            };
          }
          else
          {
            return SetTreeModule_rebalance(l, _k2, SetTreeModule_remove(comparer, k, r));
          };
        };
      }
      else
      {
        return t;
      };
    };
  });
  SetTreeModule_spliceOutSuccessor = (function (t)
  {
    if ((t.Tag == "SetOne")) 
    {
      var k2 = t.Item;
      return {CompareTo: (function (that)
      {
        var diff;
        return 0.000000;
      }), Item1: k2, Item2: (new SetTree_1_SetEmpty())};
    }
    else
    {
      if ((t.Tag == "SetNode")) 
      {
        var r = t.Item3;
        var l = t.Item2;
        var _k2 = t.Item1;
        if ((l.Tag == "SetEmpty")) 
        {
          return {CompareTo: (function (that)
          {
            var diff;
            return 0.000000;
          }), Item1: _k2, Item2: r};
        }
        else
        {
          var patternInput = SetTreeModule_spliceOutSuccessor(l);
          var l_ = patternInput.Item2;
          var k3 = patternInput.Item1;
          return {CompareTo: (function (that)
          {
            var diff;
            return 0.000000;
          }), Item1: k3, Item2: SetTreeModule_mk(l_, _k2, r)};
        };
      }
      else
      {
        throw ("internal error: Map.spliceOutSuccessor");
        return null;
      };
    };
  });
  SetTreeModule_subset = (function (comparer, a, b)
  {
    return SetTreeModule_forall((function (x)
    {
      return SetTreeModule_mem(comparer, x, b);
    }), a);
  });
  SetTreeModule_toArray = (function (s)
  {
    var n = SetTreeModule_count(s);
    var res = Array_ZeroCreate(n);
    SetTreeModule_copyToArray(s, res, 0.000000);
    return res;
  });
  SetTreeModule_toList = (function (s)
  {
    return SetTreeModule_loop(s, List_Empty());
  });
  SetTree_1_SetEmpty = (function ()
  {
    this.Tag = "SetEmpty";
  });
  SetTree_1_SetNode = (function (Item1, Item2, Item3, Item4)
  {
    this.Tag = "SetNode";
    this.Item1 = Item1;
    this.Item2 = Item2;
    this.Item3 = Item3;
    this.Item4 = Item4;
  });
  SetTree_1_SetOne = (function (Item)
  {
    this.Tag = "SetOne";
    this.Item = Item;
  });
  Set_1_get_Empty = (function (unitVar0)
  {
    var comparer = (new i_GenericComparer_1__ctor());
    return (new i_Set_1__ctor(comparer, (new SetTree_1_SetEmpty())));
  });
  Set_Add = (function (x, s)
  {
    return s.Add(x);
  });
  Set_Contains = (function (x, s)
  {
    return s.Contains(x);
  });
  Set_Empty = (function ()
  {
    return Set_1_get_Empty();
  });
  String_Length = (function (s)
  {
    return s.length;
  });
  calEvent_Note = (function (Item)
  {
    this.Tag = "Note";
    this.Item = Item;
  });
  calEvent_Vevent = (function (Item)
  {
    this.Tag = "Vevent";
    this.Item = Item;
  });
  i_CreateEnumerable_1__ctor = (function (factory)
  {
    this.factory = factory;
  });
  i_CreateEnumerable_1__ctor.prototype.CompareTo = (function (ys)
  {
    var __ = this;
    var xs = __;
    return Seq_CompareWith((function (x)
    {
      return (function (y)
      {
        return LanguagePrimitives_UnboxGeneric(x).CompareTo(y);
      });
    }), xs, ys);
  });
  i_CreateEnumerable_1__ctor.prototype.GetEnumerator = (function (unitVar1)
  {
    var __ = this;
    var _temp35;
    return __.factory(_temp35);
  });
  i_EventMarker__ctor = (function (Id, Title, Coordinates)
  {
    this.Id = Id;
    this.Title = Title;
    this.Coordinates = Coordinates;
  });
  i_EventMarker__ctor.prototype.CompareTo = (function (that)
  {
    var diff;
    diff = this.Id.CompareTo(that.Id);
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      diff = this.Title.CompareTo(that.Title);
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        diff = this.Coordinates.CompareTo(that.Coordinates);
        if ((diff != 0.000000)) 
        {
          return diff;
        }
        else
        {
          return 0.000000;
        };
      };
    };
  });
  i_GenericComparer_1__ctor = (function (unitVar0)
  {
    ;
  });
  i_GenericComparer_1__ctor.prototype.Compare = (function (x, y)
  {
    var __ = this;
    return x.CompareTo(y);
  });
  i_SetIterator_1__ctor = (function (stack, started)
  {
    this.stack = stack;
    this.started = started;
  });
  i_Set_1__ctor = (function (comparer, tree)
  {
    this.comparer_479 = comparer;
    this.tree_483 = tree;
    this.serializedData = null;
  });
  i_Set_1__ctor.prototype.get_Comparer = (function (unitVar1)
  {
    var set = this;
    return set.comparer_479;
  });
  i_Set_1__ctor.prototype.get_Tree = (function (unitVar1)
  {
    var set = this;
    return set.tree_483;
  });
  i_Set_1__ctor.prototype.Add = (function (x)
  {
    var s = this;
    return (new i_Set_1__ctor(s.get_Comparer(), SetTreeModule_add(s.get_Comparer(), x, s.get_Tree())));
  });
  i_Set_1__ctor.prototype.Remove = (function (x)
  {
    var s = this;
    return (new i_Set_1__ctor(s.get_Comparer(), SetTreeModule_remove(s.get_Comparer(), x, s.get_Tree())));
  });
  i_Set_1__ctor.prototype.get_Count = (function (unitVar1)
  {
    var s = this;
    return SetTreeModule_count(s.get_Tree());
  });
  i_Set_1__ctor.prototype.Contains = (function (x)
  {
    var s = this;
    return SetTreeModule_mem(s.get_Comparer(), x, s.get_Tree());
  });
  i_Set_1__ctor.prototype.Iterate = (function (x)
  {
    var s = this;
    return SetTreeModule_iter(x, s.get_Tree());
  });
  i_Set_1__ctor.prototype.Fold = (function (f, z)
  {
    var s = this;
    return SetTreeModule_fold((function (x)
    {
      return (function (_z)
      {
        return f(_z)(x);
      });
    }), z, s.get_Tree());
  });
  i_Set_1__ctor.prototype.get_IsEmpty = (function (unitVar1)
  {
    var s = this;
    return SetTreeModule_isEmpty(s.get_Tree());
  });
  i_Set_1__ctor.prototype.Partition = (function (f)
  {
    var s = this;
    var matchValue = s.get_Tree();
    if ((matchValue.Tag == "SetEmpty")) 
    {
      return {CompareTo: (function (that)
      {
        var diff;
        return 0.000000;
      }), Item1: s, Item2: s};
    }
    else
    {
      var patternInput = SetTreeModule_partition(s.get_Comparer(), f, s.get_Tree());
      var t2 = patternInput.Item2;
      var t1 = patternInput.Item1;
      return {CompareTo: (function (that)
      {
        var diff;
        return 0.000000;
      }), Item1: (new i_Set_1__ctor(s.get_Comparer(), t1)), Item2: (new i_Set_1__ctor(s.get_Comparer(), t2))};
    };
  });
  i_Set_1__ctor.prototype.Filter = (function (f)
  {
    var s = this;
    var matchValue = s.get_Tree();
    if ((matchValue.Tag == "SetEmpty")) 
    {
      return s;
    }
    else
    {
      return (new i_Set_1__ctor(s.get_Comparer(), SetTreeModule_filter(s.get_Comparer(), f, s.get_Tree())));
    };
  });
  i_Set_1__ctor.prototype.Map = (function (f)
  {
    var s = this;
    var comparer = (new i_GenericComparer_1__ctor());
    return (new i_Set_1__ctor(comparer, SetTreeModule_fold((function (acc)
    {
      return (function (k)
      {
        return SetTreeModule_add(comparer, f(k), acc);
      });
    }), (new SetTree_1_SetEmpty()), s.get_Tree())));
  });
  i_Set_1__ctor.prototype.Exists = (function (f)
  {
    var s = this;
    return SetTreeModule_exists(f, s.get_Tree());
  });
  i_Set_1__ctor.prototype.ForAll = (function (f)
  {
    var s = this;
    return SetTreeModule_forall(f, s.get_Tree());
  });
  i_Set_1__ctor.prototype.get_Choose = (function (unitVar1)
  {
    var x = this;
    return SetTreeModule_choose(x.get_Tree());
  });
  i_Set_1__ctor.prototype.get_MinimumElement = (function (unitVar1)
  {
    var x = this;
    return SetTreeModule_minimumElement(x.get_Tree());
  });
  i_Set_1__ctor.prototype.get_MaximumElement = (function (unitVar1)
  {
    var x = this;
    return SetTreeModule_maximumElement(x.get_Tree());
  });
  i_Set_1__ctor.prototype.IsSubsetOf = (function (y)
  {
    var x = this;
    return SetTreeModule_subset(x.get_Comparer(), x.get_Tree(), y.get_Tree());
  });
  i_Set_1__ctor.prototype.IsSupersetOf = (function (y)
  {
    var x = this;
    return SetTreeModule_subset(x.get_Comparer(), y.get_Tree(), x.get_Tree());
  });
  i_Set_1__ctor.prototype.IsProperSubsetOf = (function (y)
  {
    var x = this;
    return SetTreeModule_psubset(x.get_Comparer(), x.get_Tree(), y.get_Tree());
  });
  i_Set_1__ctor.prototype.IsProperSupersetOf = (function (y)
  {
    var x = this;
    return SetTreeModule_psubset(x.get_Comparer(), y.get_Tree(), x.get_Tree());
  });
  i_Set_1__ctor.prototype.ToList = (function (unitVar1)
  {
    var x = this;
    return SetTreeModule_toList(x.get_Tree());
  });
  i_Set_1__ctor.prototype.ToArray = (function (unitVar1)
  {
    var x = this;
    return SetTreeModule_toArray(x.get_Tree());
  });
  i_Set_1__ctor.prototype.GetHashCode = (function (unitVar1)
  {
    var __ = this;
    return 0.000000;
  });
  i_Set_1__ctor.prototype.Equals = (function (that)
  {
    var __ = this;
    return false;
  });
  i_Set_1__ctor.prototype.CompareTo = (function (that)
  {
    var __ = this;
    return SetTreeModule_compare(__.get_Comparer(), __.get_Tree(), LanguagePrimitives_UnboxGeneric(that).get_Tree());
  });
  i_Set_1__ctor.prototype.GetEnumerator = (function (unitVar1)
  {
    var s = this;
    return SetTreeModule_mkIEnumerator(s.get_Tree());
  });
  i_UnfoldEnumerator_2__ctor = (function (seed, unfold)
  {
    this.seed = seed;
    this.unfold = unfold;
    this.acc = {Tag: "Some", Value: this.seed};
    this.current = null;
  });
  i_UnfoldEnumerator_2__ctor.prototype.Reset = (function (unitVar1)
  {
    var __ = this;
    __.acc = {Tag: "Some", Value: __.seed};
    __.current = null;
  });
  i_UnfoldEnumerator_2__ctor.prototype.get_Current = (function (unitVar1)
  {
    var __ = this;
    return __.current;
  });
  i_UnfoldEnumerator_2__ctor.prototype.MoveNext = (function (unitVar1)
  {
    var __ = this;
    var matchValue = __.acc;
    var _temp20;
    var currAcc = matchValue.Value;
    var _matchValue = __.unfold(currAcc);
    if ((_matchValue.Tag == "Some")) 
    {
      var value = _matchValue.Value.Item1;
      var nextAcc = _matchValue.Value.Item2;
      __.acc = {Tag: "Some", Value: nextAcc};
      __.current = value;
      _temp20 = true;
    }
    else
    {
      __.acc = {Tag: "None"};
      __.current = null;
      _temp20 = false;
    };
    return ((matchValue.Tag == "Some") && _temp20);
  });
  i_UnfoldEnumerator_2__ctor.prototype.Dispose = (function (unitVar1)
  {
    var __ = this;
  });
  i_mkIEnumerator_1__ctor = (function (s)
  {
    this.s = s;
    this.i = {contents: SetTreeModule_mkIterator(this.s)};
  });
  i_mkIEnumerator_1__ctor.prototype.get_Current = (function (unitVar1)
  {
    var x = this;
    return SetTreeModule_current(x.i.contents);
  });
  i_mkIEnumerator_1__ctor.prototype.MoveNext = (function (unitVar1)
  {
    var x = this;
    return SetTreeModule_moveNext(x.i.contents);
  });
  i_mkIEnumerator_1__ctor.prototype.Reset = (function (unitVar1)
  {
    var x = this;
    x.i.contents = SetTreeModule_mkIterator(x.s);
  });
  i_mkIEnumerator_1__ctor.prototype.Dispose = (function (unitVar1)
  {
    var x = this;
  });
  i_notification__ctor = (function (id, title, details)
  {
    this.id = id;
    this.title = title;
    this.details = details;
  });
  i_notification__ctor.prototype.Info = (function (unitVar1)
  {
    var x = this;
    return ((x.title + ", ") + x.details);
  });
  i_notification__ctor.prototype.get_Details = (function (unitVar1)
  {
    var x = this;
    return x.details;
  });
  i_notification__ctor.prototype.get_Title = (function (unitVar1)
  {
    var x = this;
    return x.title;
  });
  i_notification__ctor.prototype.get_Id = (function (unitVar1)
  {
    var x = this;
    return x.id;
  });
  i_vevent__ctor = (function (id, title, starttime, city, streetAddress, locationdetails, details, latlon)
  {
    this.id = id;
    this.title = title;
    this.starttime = starttime;
    this.city = city;
    this.streetAddress = streetAddress;
    this.locationdetails = locationdetails;
    this.details = details;
    this.LatLon_ = latlon;
  });
  i_vevent__ctor.prototype.Summary = (function (unitVar1)
  {
    var x = this;
    var _temp7;
    if ((String_Length(x.get_LocationDetails()).CompareTo(0.000000) > 0.000000)) 
    {
      _temp7 = (x.get_LocationDetails() + ", \r\n");
    }
    else
    {
      _temp7 = "";
    };
    var locdet = _temp7;
    return (((((((EventItem_jsDateFormatToUser(x.get_StarTime()) + " \r\n") + x.get_Title()) + " (") + x.get_City()) + ")\r\n") + locdet) + x.get_Details());
  });
  i_vevent__ctor.prototype.iCal = (function (unitVar1)
  {
    var x = this;
    return (((((((((((((((("BEGIN:VEVENT\r\nUID: " + x.get_Id()) + "@test.com\r\nSUMMARY:") + x.get_Title()) + "\r\nTZID:EET-1276\r\nDTSTART:") + EventItem_jsDateFormatToJson(x.get_StarTime(), 0.000000)) + "\r\nDTEND:") + EventItem_jsDateFormatToJson(x.get_StarTime(), x.get_DurationHours())) + "\r\nLOCATION:") + x.get_StreetAddress()) + ", ") + x.get_City()) + "\r\nDESCRIPTION:") + x.get_LocationDetails()) + ", ") + x.get_Details()) + "\r\nEND:VEVENT");
  });
  i_vevent__ctor.prototype.set_LatLon = (function (v)
  {
    var __ = this;
    __.LatLon_ = v;
  });
  i_vevent__ctor.prototype.get_LatLon = (function (unitVar1)
  {
    var __ = this;
    return __.LatLon_;
  });
  i_vevent__ctor.prototype.get_Details = (function (unitVar1)
  {
    var x = this;
    return x.details;
  });
  i_vevent__ctor.prototype.get_LocationDetails = (function (unitVar1)
  {
    var x = this;
    return x.locationdetails;
  });
  i_vevent__ctor.prototype.get_StreetAddress = (function (unitVar1)
  {
    var x = this;
    return x.streetAddress;
  });
  i_vevent__ctor.prototype.get_City = (function (unitVar1)
  {
    var x = this;
    return x.city;
  });
  i_vevent__ctor.prototype.get_DurationHours = (function (unitVar1)
  {
    var x = this;
    return 1.000000;
  });
  i_vevent__ctor.prototype.get_StarTime = (function (unitVar1)
  {
    var x = this;
    return x.starttime;
  });
  i_vevent__ctor.prototype.get_Title = (function (unitVar1)
  {
    var x = this;
    return x.title;
  });
  i_vevent__ctor.prototype.get_Id = (function (unitVar1)
  {
    var x = this;
    return x.id;
  });
  list_1_Cons = (function (Item1, Item2)
  {
    this.Tag = "Cons";
    this.Item1 = Item1;
    this.Item2 = Item2;
  });
  list_1_Cons.prototype.CompareTo = (function (that)
  {
    var diff;
    return 0.000000;
  });
  list_1_Nil = (function ()
  {
    this.Tag = "Nil";
  });
  list_1_Nil.prototype.CompareTo = (function (that)
  {
    var diff;
    return 0.000000;
  });
  EventItem_items = EventItem_get_items();
  return Page_main()
});