$(document).ready(function () {
var vevent__iCal$, vevent__get_Title$, vevent__get_StreetAddress$, vevent__get_StarTime$, vevent__get_LocationDetails$, vevent__get_LatLon$, vevent__get_Id$, vevent__get_DurationHours$, vevent__get_Details$, vevent__get_City$, vevent___ctor$, vevent__Summary$, notification__get_Title$, notification__get_Id$, notification__get_Details$, notification___ctor$, notification__Info$, list_1_Int32__NilInt32, list_1_Int32__ConsInt32, calEvent__Vevent, calEvent__Note, UnfoldEnumerator_2_Int32__Result___ctor$Int32_Result_, UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32, UnfoldEnumerator_2_Int32__EventMarker___ctor$Int32_EventMarker_, UnfoldEnumerator_2_IEnumerator_1_calEvent__EventMarker___ctor$IEnumerator_1_calEvent__EventMarker_, UnfoldEnumerator_2_IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__EventMarker___ctor$IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__EventMarker_, UnfoldEnumerator_2_IEnumerator_1_Int32__calEvent___ctor$IEnumerator_1_Int32__calEvent_, UnfoldEnumerator_2_IEnumerator_1_EventMarker__EventMarker___ctor$IEnumerator_1_EventMarker__EventMarker_, UnfoldEnumerator_2_IEnumerator_1_EventMarker__Double___ctor$IEnumerator_1_EventMarker__Double, UnfoldEnumerator_2_FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker___ctor$FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_, UnfoldEnumerator_2_FSharpList_1_Int32__Int32___ctor$FSharpList_1_Int32__Int32, TuplecalEvent__IEnumerator_1_Int32_, TupleTuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_, TupleString_String_String_String_String_String, TupleSetTree_1_EventMarker__SetTree_1_EventMarker_, TupleResult__Int32, TupleInt32_Int32, TupleInt32_FSharpList_1_Int32_, TupleFSharpOption_1_EventMarker__FSharpSet_1_EventMarker_, TupleEventMarker__Int32, TupleEventMarker__IEnumerator_1_calEvent_, TupleEventMarker__IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_, TupleEventMarker__IEnumerator_1_EventMarker_, TupleDouble_IEnumerator_1_EventMarker_, TupleDouble_Double, String__Length$, Set__Empty$EventMarker_EventMarker_, Set__Contains$EventMarker_EventMarker_, Set__Add$EventMarker_EventMarker_, Set_1_EventMarker__get_Tree$EventMarker_, Set_1_EventMarker__get_Empty$EventMarker_, Set_1_EventMarker__get_Comparer$EventMarker_, Set_1_EventMarker___ctor$EventMarker_, Set_1_EventMarker__Contains$EventMarker_, Set_1_EventMarker__Add$EventMarker_, SetTree_1_EventMarker__SetOneEventMarker_, SetTree_1_EventMarker__SetNodeEventMarker_, SetTree_1_EventMarker__SetEmptyEventMarker_, SetTreeModule__tolerance, SetTreeModule__rebalance$EventMarker_EventMarker_, SetTreeModule__mk$EventMarker_EventMarker_, SetTreeModule__mem$EventMarker_EventMarker_, SetTreeModule__height$EventMarker_EventMarker_, SetTreeModule__get_tolerance$, SetTreeModule__add$EventMarker_EventMarker_, SetTreeModule__SetOne$EventMarker_EventMarker_, SetTreeModule__SetNode$EventMarker_EventMarker_, Seq__Unfold$Int32__Result_Int32_Result_, Seq__Unfold$Int32__Int32_Int32_Int32, Seq__Unfold$Int32__EventMarker_Int32_EventMarker_, Seq__Unfold$IEnumerator_1_calEvent__EventMarker_IEnumerator_1_calEvent__EventMarker_, Seq__Unfold$IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__EventMarker_IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__EventMarker_, Seq__Unfold$IEnumerator_1_Int32__calEvent_IEnumerator_1_Int32__calEvent_, Seq__Unfold$IEnumerator_1_EventMarker__EventMarker_IEnumerator_1_EventMarker__EventMarker_, Seq__Unfold$IEnumerator_1_EventMarker__Double_IEnumerator_1_EventMarker__Double, Seq__Unfold$FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_, Seq__Unfold$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32, Seq__ToList$Int32_Int32, Seq__ToArray$EventMarker_EventMarker_, Seq__Skip$Double_Double, Seq__Scan$Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__EventMarker_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__EventMarker_, Seq__Reduce$Double_Double, Seq__OfList$Int32_Int32, Seq__OfArray$Result_Result_, Seq__OfArray$EventMarker_EventMarker_, Seq__MinBy$Double__Double_Double_Double, Seq__Map$calEvent__EventMarker_calEvent__EventMarker_, Seq__Map$Int32__calEvent_Int32_calEvent_, Seq__Map$EventMarker__Double_EventMarker__Double, Seq__IterateIndexed$EventMarker_EventMarker_, Seq__Iterate$calEvent_calEvent_, Seq__Iterate$EventMarker_EventMarker_, Seq__IsEmpty$Result_Result_, Seq__IsEmpty$EventMarker_EventMarker_, Seq__Head$Result_Result_, Seq__Head$Double_Double, Seq__FromFactory$calEvent_calEvent_, Seq__FromFactory$Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_, Seq__FromFactory$Result_Result_, Seq__FromFactory$Int32_Int32, Seq__FromFactory$EventMarker_EventMarker_, Seq__FromFactory$Double_Double, Seq__FoldIndexedAux$Unit__calEvent_Unit__calEvent_, Seq__FoldIndexedAux$Unit__EventMarker_Unit__EventMarker_, Seq__FoldIndexedAux$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32, Seq__FoldIndexedAux$Double__Double_Double_Double, Seq__FoldIndexed$calEvent__Unit_calEvent__Unit_, Seq__FoldIndexed$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_, Seq__FoldIndexed$EventMarker__Unit_EventMarker__Unit_, Seq__FoldIndexed$Double__Double_Double_Double, Seq__Fold$calEvent__Unit_calEvent__Unit_, Seq__Fold$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_, Seq__Fold$EventMarker__Unit_EventMarker__Unit_, Seq__Fold$Double__Double_Double_Double, Seq__Filter$EventMarker_EventMarker_, Seq__Enumerator$calEvent_calEvent_, Seq__Enumerator$Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_, Seq__Enumerator$Result_Result_, Seq__Enumerator$Int32_Int32, Seq__Enumerator$EventMarker_EventMarker_, Seq__Enumerator$Double_Double, Seq__DistinctBy$EventMarker__EventMarker_EventMarker__EventMarker_, Seq__Distinct$EventMarker_EventMarker_, Seq__Delay$calEvent_calEvent_, Seq__Delay$Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_, Seq__Delay$EventMarker_EventMarker_, Seq__Delay$Double_Double, Seq__Choose$Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__EventMarker_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__EventMarker_, Range__oneStep$Int32_Int32, Range__customStep$Int32__Int32_Int32_Int32, Page__parseEventList$, Page__op_Dynamic$, Page__main$, Page__jQuery$, Page__fetchNewPosition$, Page__asJQuery$Object_Object_, Page__VeventsToMarkers$, Option__IsSome$Int32_Int32, Option__IsSome$IEnumerator_1_calEvent_IEnumerator_1_calEvent_, Option__IsSome$IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_, Option__IsSome$IEnumerator_1_Int32_IEnumerator_1_Int32_, Option__IsSome$IEnumerator_1_EventMarker_IEnumerator_1_EventMarker_, Option__IsSome$FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_, Option__IsSome$FSharpList_1_Int32_FSharpList_1_Int32_, Option__GetValue$Tuple_2_calEvent__IEnumerator_1_Int32_Tuple_2_calEvent__IEnumerator_1_Int32_, Option__GetValue$Tuple_2_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_Tuple_2_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_, Option__GetValue$Tuple_2_Result__Int32_Tuple_2_Result__Int32_, Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_, Option__GetValue$Tuple_2_Int32__FSharpList_1_Int32_Tuple_2_Int32__FSharpList_1_Int32_, Option__GetValue$Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_, Option__GetValue$Tuple_2_EventMarker__Int32_Tuple_2_EventMarker__Int32_, Option__GetValue$Tuple_2_EventMarker__IEnumerator_1_calEvent_Tuple_2_EventMarker__IEnumerator_1_calEvent_, Option__GetValue$Tuple_2_EventMarker__IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_Tuple_2_EventMarker__IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_, Option__GetValue$Tuple_2_EventMarker__IEnumerator_1_EventMarker_Tuple_2_EventMarker__IEnumerator_1_EventMarker_, Option__GetValue$Tuple_2_Double__IEnumerator_1_EventMarker_Tuple_2_Double__IEnumerator_1_EventMarker_, Option__GetValue$Int32_Int32, Option__GetValue$IEnumerator_1_calEvent_IEnumerator_1_calEvent_, Option__GetValue$IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_, Option__GetValue$IEnumerator_1_Int32_IEnumerator_1_Int32_, Option__GetValue$IEnumerator_1_EventMarker_IEnumerator_1_EventMarker_, Option__GetValue$FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_, Option__GetValue$FSharpList_1_Int32_FSharpList_1_Int32_, Option__GetValue$EventMarker_EventMarker_, List__Tail$Int32_Int32, List__Reverse$Int32_Int32, List__Head$Int32_Int32, List__FoldIndexedAux$list_1_Int32__Int32_list_1_Int32__Int32, List__FoldIndexed$Int32__list_1_Int32_Int32_list_1_Int32_, List__Fold$Int32__list_1_Int32_Int32_list_1_Int32_, List__Empty$Int32_Int32, List__CreateCons$Int32_Int32, GoogleMap__showMyPosition$, GoogleMap__op_Dynamic$, GoogleMap__makeMap$, GoogleLatLong__parseGoogleLocation$, GoogleLatLong__jQuery$, GoogleLatLong__fetchCoordinates$LocationReply_LocationReply_, GoogleLatLong__FetchLatLong$, GenericConstants__One$Int32_Int32, GenericComparer_1_EventMarker___ctor$EventMarker_, EventMarker___ctor$, EventItem__mydate$, EventItem__jsDateFormatToUserDay$, EventItem__jsDateFormatToUser$, EventItem__jsDateFormatToJson$, EventItem__jsDateFormatCalendar$, EventItem__items, EventItem__get_items$, EventItem__formatDateData$, EventItem__fetchQRCodeUrl$, DateOrMonth__MonthAndYear, DateOrMonth__FullDate, CreateEnumerable_1_calEvent___ctor$calEvent_, CreateEnumerable_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker___ctor$Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_, CreateEnumerable_1_Result___ctor$Result_, CreateEnumerable_1_Int32___ctor$Int32, CreateEnumerable_1_EventMarker___ctor$EventMarker_, CreateEnumerable_1_Double___ctor$Double, Array__ZeroCreate$EventMarker_EventMarker_, Array__BoxedLength$;
  Array__BoxedLength$ = (function (xs)
  {
    return xs.length;
  });
  Array__ZeroCreate$EventMarker_EventMarker_ = (function (size)
  {
    return new Array(size);
  });
  CreateEnumerable_1_Double___ctor$Double = (function (factory)
  {
    this.factory = factory;
  });
  CreateEnumerable_1_EventMarker___ctor$EventMarker_ = (function (factory)
  {
    this.factory = factory;
  });
  CreateEnumerable_1_Int32___ctor$Int32 = (function (factory)
  {
    this.factory = factory;
  });
  CreateEnumerable_1_Result___ctor$Result_ = (function (factory)
  {
    this.factory = factory;
  });
  CreateEnumerable_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker___ctor$Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_ = (function (factory)
  {
    this.factory = factory;
  });
  CreateEnumerable_1_calEvent___ctor$calEvent_ = (function (factory)
  {
    this.factory = factory;
  });
  DateOrMonth__FullDate = (function (Item)
  {
    this.Tag = 1.000000;
    this._CaseName = "FullDate";
    this.Item = Item;
  });
  DateOrMonth__FullDate.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.Tag < that.Tag) ? -1.000000 : ((this.Tag == that.Tag) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Item.CompareTo(that.Item);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  DateOrMonth__MonthAndYear = (function (Item)
  {
    this.Tag = 0.000000;
    this._CaseName = "MonthAndYear";
    this.Item = Item;
  });
  DateOrMonth__MonthAndYear.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.Tag < that.Tag) ? -1.000000 : ((this.Tag == that.Tag) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = ((this.Item < that.Item) ? -1.000000 : ((this.Item == that.Item) ? 0.000000 : 1.000000));
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  EventItem__fetchQRCodeUrl$ = (function (itm)
  {
    var _458;
    var copyOfStruct = 150;
    _458 = copyOfStruct.toString();
    var size = _458;
    var baseurl = (((("http://chart.apis.google.com/chart?chs=" + size) + "x") + size) + "\u0026cht=qr\u0026choe=UTF-8\u0026chl=");
    if ((itm.Tag == 1.000000)) 
    {
      var item = itm.Item;
      return (baseurl + encodeURIComponent(notification__Info$(item)));
    }
    else
    {
      var _item = itm.Item;
      return (baseurl + encodeURIComponent(vevent__iCal$(_item)));
    };
  });
  EventItem__formatDateData$ = (function (md, duration)
  {
    var lz = (function (i)
    {
      if ((i < 10.000000)) 
      {
        return ("0" + i.toString());
      }
      else
      {
        return i.toString();
      };
    });
    var _184;
    var copyOfStruct = md.getFullYear();
    _184 = copyOfStruct.toString();
    return (new TupleString_String_String_String_String_String(_184, lz((md.getMonth() + 1.000000)), lz(md.getDate()), lz((md.getHours() + duration)), lz(md.getMinutes()), lz(md.getSeconds())));
  });
  EventItem__get_items$ = (function ()
  {
    var dsource = document.getElementById("#datasource");
    jQuery(".datacontainer").css("visibility", "hidden");
    jQuery(".datacontainer").css("position", "absolute");
    var trs = dsource.getElementsByTagName("tr");
    var _670;
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
      if ((matchValue == 13.000000)) 
      {
        return (function (arg0)
        {
          return (new calEvent__Vevent(arg0));
        })((new vevent___ctor$(s(0), s(1), EventItem__mydate$(v(2), v(3), v(4), v(5), v(6)), s(7), s(8), s(9), s(10), (new TupleDouble_Double(s(11), s(12))))));
      }
      else
      {
        if ((matchValue == 3.000000)) 
        {
          return (function (arg0)
          {
            return (new calEvent__Note(arg0));
          })((new notification___ctor$(s(0), s(1), s(2))));
        }
        else
        {
          if ((matchValue == 25.000000)) 
          {
            if ((((String__Length$(s(1)) < 2) && (String__Length$(s(3)) < 2)) && (String__Length$(s(23)) < 2))) 
            {
              return (function (arg0)
              {
                return (new calEvent__Vevent(arg0));
              })((new vevent___ctor$(s(0), s(2), EventItem__mydate$(v(4), v(6), v(8), v(10), v(12)), s(14), s(16), s(18), s(20), (new TupleDouble_Double(s(22), s(24))))));
            }
            else
            {
              if ((matchValue == 5.000000)) 
              {
                if (((String__Length$(s(1)) < 2) && (String__Length$(s(3)) < 2))) 
                {
                  return (function (arg0)
                  {
                    return (new calEvent__Note(arg0));
                  })((new notification___ctor$(s(0), s(2), s(4))));
                }
                else
                {
                  var _897;
                  var _899;
                  var copyOfStruct = tds.length;
                  _899 = copyOfStruct.toString();
                  _897 = ("#datasource tablestructure has changed! " + _899);
                  throw (_897);
                  return null;
                };
              }
              else
              {
                var _903;
                var _905;
                var _copyOfStruct = tds.length;
                _905 = _copyOfStruct.toString();
                _903 = ("#datasource tablestructure has changed! " + _905);
                throw (_903);
                return null;
              };
            };
          }
          else
          {
            if ((matchValue == 5.000000)) 
            {
              if (((String__Length$(s(1)) < 2) && (String__Length$(s(3)) < 2))) 
              {
                return (function (arg0)
                {
                  return (new calEvent__Note(arg0));
                })((new notification___ctor$(s(0), s(2), s(4))));
              }
              else
              {
                var _938;
                var _940;
                var __copyOfStruct = tds.length;
                _940 = __copyOfStruct.toString();
                _938 = ("#datasource tablestructure has changed! " + _940);
                throw (_938);
                return null;
              };
            }
            else
            {
              var _944;
              var _946;
              var ___copyOfStruct = tds.length;
              _946 = ___copyOfStruct.toString();
              _944 = ("#datasource tablestructure has changed! " + _946);
              throw (_944);
              return null;
            };
          };
        };
      };
    });
    _670 = (function (source)
    {
      return Seq__Map$Int32__calEvent_Int32_calEvent_(mapping, Seq__OfList$Int32_Int32(source));
    });
    return _670(Seq__ToList$Int32_Int32(Range__oneStep$Int32_Int32(0, (trs.length - 1))));
  });
  EventItem__jsDateFormatCalendar$ = (function (mdx)
  {
    if ((mdx.Tag == 1.000000)) 
    {
      var md = mdx.Item;
      var patternInput = EventItem__formatDateData$(md, 0.000000);
      var y = patternInput.Items[0.000000];
      var s = patternInput.Items[5.000000];
      var n = patternInput.Items[4.000000];
      var m = patternInput.Items[1.000000];
      var h = patternInput.Items[3.000000];
      var d = patternInput.Items[2.000000];
      return ((((y + "-") + m) + "-") + d);
    }
    else
    {
      var _s = mdx.Item;
      return _s;
    };
  });
  EventItem__jsDateFormatToJson$ = (function (mdx, duration)
  {
    if ((mdx.Tag == 1.000000)) 
    {
      var md = mdx.Item;
      var patternInput = EventItem__formatDateData$(md, duration);
      var y = patternInput.Items[0.000000];
      var s = patternInput.Items[5.000000];
      var n = patternInput.Items[4.000000];
      var m = patternInput.Items[1.000000];
      var h = patternInput.Items[3.000000];
      var d = patternInput.Items[2.000000];
      return ((((((y + m) + d) + "T") + h) + n) + s);
    }
    else
    {
      var _s = mdx.Item;
      return _s;
    };
  });
  EventItem__jsDateFormatToUser$ = (function (mdx)
  {
    if ((mdx.Tag == 1.000000)) 
    {
      var md = mdx.Item;
      var _167;
      var z = md;
      _167 = (z.getFullYear() < 1990.000000);
      if (_167) 
      {
        var _z = md;
        return "";
      }
      else
      {
        var patternInput = EventItem__formatDateData$(md, 0.000000);
        var y = patternInput.Items[0.000000];
        var s = patternInput.Items[5.000000];
        var n = patternInput.Items[4.000000];
        var m = patternInput.Items[1.000000];
        var h = patternInput.Items[3.000000];
        var d = patternInput.Items[2.000000];
        return ((((((((d + ".") + m) + ".") + y) + " ") + h) + ".") + n);
      };
    }
    else
    {
      var _s = mdx.Item;
      if ((_s == "0.0")) 
      {
        return "";
      }
      else
      {
        return _s;
      };
    };
  });
  EventItem__jsDateFormatToUserDay$ = (function (mdx)
  {
    if ((mdx.Tag == 1.000000)) 
    {
      var md = mdx.Item;
      var _341;
      var z = md;
      _341 = (z.getFullYear() < 1990.000000);
      if (_341) 
      {
        var _z = md;
        return "";
      }
      else
      {
        var patternInput = EventItem__formatDateData$(md, 0.000000);
        var y = patternInput.Items[0.000000];
        var s = patternInput.Items[5.000000];
        var n = patternInput.Items[4.000000];
        var m = patternInput.Items[1.000000];
        var h = patternInput.Items[3.000000];
        var d = patternInput.Items[2.000000];
        return ((((d + ".") + m) + ".") + y);
      };
    }
    else
    {
      var _s = mdx.Item;
      if ((_s == "0.0")) 
      {
        return "";
      }
      else
      {
        return _s;
      };
    };
  });
  EventItem__mydate$ = (function (y, m, d, h, n)
  {
    if ((d == 0)) 
    {
      return (new DateOrMonth__MonthAndYear(((m.toString() + ".") + y.toString())));
    }
    else
    {
      return (new DateOrMonth__FullDate((new Date(y, (m - 1), d, h, n, 0.000000))));
    };
  });
  EventMarker___ctor$ = (function (Id, Title, Coordinates)
  {
    this.Id = Id;
    this.Title = Title;
    this.Coordinates = Coordinates;
  });
  EventMarker___ctor$.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.Id < that.Id) ? -1.000000 : ((this.Id == that.Id) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = ((this.Title < that.Title) ? -1.000000 : ((this.Title == that.Title) ? 0.000000 : 1.000000));
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        var ___diff = 0.000000;
        ___diff = this.Coordinates.CompareTo(that.Coordinates);
        diff = ___diff;
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
  GenericComparer_1_EventMarker___ctor$EventMarker_ = (function (unitVar0)
  {
    ;
  });
  GenericConstants__One$Int32_Int32 = (function ()
  {
    return 1;
  });
  GoogleLatLong__FetchLatLong$ = (function (id, address)
  {
    var result = GoogleLatLong__fetchCoordinates$LocationReply_LocationReply_(address, (function (data)
    {
      return GoogleLatLong__parseGoogleLocation$(id, data);
    }));
    return result;
  });
  GoogleLatLong__fetchCoordinates$LocationReply_LocationReply_ = (function (address, callback)
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
  GoogleLatLong__jQuery$ = (function (command)
  {
    return jQuery(command);
  });
  GoogleLatLong__parseGoogleLocation$ = (function (id, data)
  {
    var matchValue = Seq__IsEmpty$Result_Result_(Seq__OfArray$Result_Result_(data.results));
    if (matchValue) 
    {
      return (function (value)
      {
        var ignored0 = value;
      })("No results");
    }
    else
    {
      var replies = Seq__Head$Result_Result_(Seq__OfArray$Result_Result_(data.results));
      var latlon = (new TupleDouble_Double(replies.geometry.location.lat, replies.geometry.location.lng));
      var _2700;
      var _2707;
      var copyOfStruct = latlon.Items[0.000000];
      _2707 = copyOfStruct.toString();
      _2700 = GoogleLatLong__jQuery$(("#uLatitude" + id)).val(_2707);
      (function (value)
      {
        var ignored0 = value;
      })(_2700);
      var _2713;
      var _2718;
      var _copyOfStruct = latlon.Items[1.000000];
      _2718 = _copyOfStruct.toString();
      _2713 = GoogleLatLong__jQuery$(("#uLongitude" + id)).val(_2718);
      (function (value)
      {
        var ignored0 = value;
      })(_2713);
      return window.alert(("Asetettu paikka osoitteelle: " + replies.formatted_address));
    };
  });
  GoogleMap__makeMap$ = (function (markers)
  {
    var _2144;
    var _2148;
    var returnVal = {};
    returnVal.zoom = 4.000000;
    null;
    returnVal.center = (new google.maps.LatLng(65.450000, 25.960000));
    null;
    returnVal.mapTypeControl = true;
    null;
    returnVal.mapTypeId = google.maps.MapTypeId.ROADMAP;
    null;
    _2148 = returnVal;
    _2144 = (new google.maps.Map(document.getElementById("mapContainer"), _2148));
    var map = _2144;
    var _2160;
    var action = (function (i)
    {
      var _2164;
      var _2165;
      var _returnVal = {};
      _returnVal.clickable = true;
      null;
      _returnVal.draggable = false;
      null;
      _returnVal.flat = true;
      null;
      _returnVal.position = (function (tupledArg)
      {
        var arg00 = tupledArg.Items[0.000000];
        var arg01 = tupledArg.Items[1.000000];
        return (new google.maps.LatLng(arg00, arg01));
      })(i.Coordinates);
      null;
      _returnVal.map = map;
      null;
      _returnVal.title = i.Title;
      null;
      _2165 = _returnVal;
      _2164 = (new google.maps.Marker(_2165));
      return (function (value)
      {
        var ignored0 = value;
      })(_2164);
    });
    _2160 = (function (source)
    {
      return Seq__Iterate$EventMarker_EventMarker_(action, source);
    });
    _2160(markers);
    var myTimer = {contents: 0.000000};
    var mapresize = (function (unitVar0)
    {
      var refresh = (function (_unitVar0)
      {
        return google.maps.event.trigger(map, "resize", null);
      });
      clearTimeout(myTimer.contents);
      myTimer.contents = setTimeout(refresh, 1000);
    });
    (function (value)
    {
      var ignored0 = value;
    })(GoogleMap__op_Dynamic$(jQuery, "mapContainer").bind("resize", mapresize));
    return map;
  });
  GoogleMap__op_Dynamic$ = (function (jqx, name)
  {
    return jqx(("#" + name));
  });
  GoogleMap__showMyPosition$ = (function (markers)
  {
    var mymap = GoogleMap__makeMap$(markers);
    if ((Modernizr.geolocation && (!Seq__IsEmpty$EventMarker_EventMarker_(markers)))) 
    {
      return navigator.geolocation.getCurrentPosition((function (position)
      {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var coords = (new google.maps.LatLng(latitude, longitude));
        var distance = (function (tupledArg)
        {
          var marklat = tupledArg.Items[0.000000];
          var marklon = tupledArg.Items[1.000000];
          var R = 6371.000000;
          var dLat = (((marklat - latitude) * Math.PI) / 180.000000);
          var dLon = (((marklon - longitude) * Math.PI) / 180.000000);
          var lat1 = ((latitude * Math.PI) / 180.000000);
          var lat2 = ((marklat * Math.PI) / 180.000000);
          var a = ((Math.sin((dLat / 2.000000)) * Math.sin((dLat / 2.000000))) + (((Math.sin((dLon / 2.000000)) * Math.sin((dLon / 2.000000))) * Math.cos(lat1)) * Math.cos(lat2)));
          var c = (2.000000 * Math.atan2(Math.sqrt(a), Math.sqrt((1.000000 - a))));
          return (R * c);
        });
        var _2339;
        var _2340;
        var projection = (function (f)
        {
          return f;
        });
        _2340 = (function (source)
        {
          return Seq__MinBy$Double__Double_Double_Double(projection, source);
        });
        var _2413;
        var _2414;
        var mapping = (function (f)
        {
          return distance(f.Coordinates);
        });
        _2414 = (function (source)
        {
          return Seq__Map$EventMarker__Double_EventMarker__Double(mapping, source);
        });
        _2413 = _2414(markers);
        _2339 = _2340(_2413);
        var nearest = _2339;
        var _2500;
        var _2501;
        var predicate = (function (f)
        {
          var d = (distance(f.Coordinates) - nearest);
          return (d < 20.000000);
        });
        _2501 = (function (source)
        {
          return Seq__Filter$EventMarker_EventMarker_(predicate, source);
        });
        _2500 = _2501(markers);
        var quiteNear = _2500;
        var _2517;
        var action = (function (f)
        {
          return (function (value)
          {
            var ignored0 = value;
          })(GoogleMap__op_Dynamic$(jQuery, f.Id).attr("class", "myNearEvent"));
        });
        _2517 = (function (source)
        {
          return Seq__Iterate$EventMarker_EventMarker_(action, source);
        });
        return _2517(quiteNear);
      }));
    }
    else
    {
      ;
    };
  });
  List__CreateCons$Int32_Int32 = (function (x, xs)
  {
    return (new list_1_Int32__ConsInt32(x, xs));
  });
  List__Empty$Int32_Int32 = (function ()
  {
    return (new list_1_Int32__NilInt32());
  });
  List__Fold$Int32__list_1_Int32_Int32_list_1_Int32_ = (function (f, seed, xs)
  {
    return List__FoldIndexed$Int32__list_1_Int32_Int32_list_1_Int32_((function (_arg1)
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
  List__FoldIndexed$Int32__list_1_Int32_Int32_list_1_Int32_ = (function (f, seed, xs)
  {
    return List__FoldIndexedAux$list_1_Int32__Int32_list_1_Int32__Int32(f, 0, seed, xs);
  });
  List__FoldIndexedAux$list_1_Int32__Int32_list_1_Int32__Int32 = (function (f, i, acc, _arg1)
  {
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$list_1_Int32__Int32_list_1_Int32__Int32(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
  });
  List__Head$Int32_Int32 = (function (_arg1)
  {
    if ((_arg1.Tag == 1.000000)) 
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
  List__Reverse$Int32_Int32 = (function (xs)
  {
    return List__Fold$Int32__list_1_Int32_Int32_list_1_Int32_((function (acc)
    {
      return (function (x)
      {
        return (new list_1_Int32__ConsInt32(x, acc));
      });
    }), (new list_1_Int32__NilInt32()), xs);
  });
  List__Tail$Int32_Int32 = (function (_arg1)
  {
    if ((_arg1.Tag == 1.000000)) 
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
  Option__GetValue$EventMarker_EventMarker_ = (function (option)
  {
    return option.Value;
  });
  Option__GetValue$FSharpList_1_Int32_FSharpList_1_Int32_ = (function (option)
  {
    return option.Value;
  });
  Option__GetValue$FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_ = (function (option)
  {
    return option.Value;
  });
  Option__GetValue$IEnumerator_1_EventMarker_IEnumerator_1_EventMarker_ = (function (option)
  {
    return option.Value;
  });
  Option__GetValue$IEnumerator_1_Int32_IEnumerator_1_Int32_ = (function (option)
  {
    return option.Value;
  });
  Option__GetValue$IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_ = (function (option)
  {
    return option.Value;
  });
  Option__GetValue$IEnumerator_1_calEvent_IEnumerator_1_calEvent_ = (function (option)
  {
    return option.Value;
  });
  Option__GetValue$Int32_Int32 = (function (option)
  {
    return option.Value;
  });
  Option__GetValue$Tuple_2_Double__IEnumerator_1_EventMarker_Tuple_2_Double__IEnumerator_1_EventMarker_ = (function (option)
  {
    return option.Value;
  });
  Option__GetValue$Tuple_2_EventMarker__IEnumerator_1_EventMarker_Tuple_2_EventMarker__IEnumerator_1_EventMarker_ = (function (option)
  {
    return option.Value;
  });
  Option__GetValue$Tuple_2_EventMarker__IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_Tuple_2_EventMarker__IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_ = (function (option)
  {
    return option.Value;
  });
  Option__GetValue$Tuple_2_EventMarker__IEnumerator_1_calEvent_Tuple_2_EventMarker__IEnumerator_1_calEvent_ = (function (option)
  {
    return option.Value;
  });
  Option__GetValue$Tuple_2_EventMarker__Int32_Tuple_2_EventMarker__Int32_ = (function (option)
  {
    return option.Value;
  });
  Option__GetValue$Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_ = (function (option)
  {
    return option.Value;
  });
  Option__GetValue$Tuple_2_Int32__FSharpList_1_Int32_Tuple_2_Int32__FSharpList_1_Int32_ = (function (option)
  {
    return option.Value;
  });
  Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_ = (function (option)
  {
    return option.Value;
  });
  Option__GetValue$Tuple_2_Result__Int32_Tuple_2_Result__Int32_ = (function (option)
  {
    return option.Value;
  });
  Option__GetValue$Tuple_2_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_Tuple_2_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_ = (function (option)
  {
    return option.Value;
  });
  Option__GetValue$Tuple_2_calEvent__IEnumerator_1_Int32_Tuple_2_calEvent__IEnumerator_1_Int32_ = (function (option)
  {
    return option.Value;
  });
  Option__IsSome$FSharpList_1_Int32_FSharpList_1_Int32_ = (function (option)
  {
    return ((option.Tag == 1.000000) && true);
  });
  Option__IsSome$FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_ = (function (option)
  {
    return ((option.Tag == 1.000000) && true);
  });
  Option__IsSome$IEnumerator_1_EventMarker_IEnumerator_1_EventMarker_ = (function (option)
  {
    return ((option.Tag == 1.000000) && true);
  });
  Option__IsSome$IEnumerator_1_Int32_IEnumerator_1_Int32_ = (function (option)
  {
    return ((option.Tag == 1.000000) && true);
  });
  Option__IsSome$IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_ = (function (option)
  {
    return ((option.Tag == 1.000000) && true);
  });
  Option__IsSome$IEnumerator_1_calEvent_IEnumerator_1_calEvent_ = (function (option)
  {
    return ((option.Tag == 1.000000) && true);
  });
  Option__IsSome$Int32_Int32 = (function (option)
  {
    return ((option.Tag == 1.000000) && true);
  });
  Page__VeventsToMarkers$ = (function (is)
  {
    var _1297;
    var _1339;
    var _1853;
    var _1854;
    var predicate = (function (i)
    {
      return (i.Id != "");
    });
    _1854 = (function (source)
    {
      return Seq__Filter$EventMarker_EventMarker_(predicate, source);
    });
    var _1942;
    var _1943;
    var mapping = (function (i)
    {
      if ((i.Tag == 0.000000)) 
      {
        var z = i.Item;
        return (new EventMarker___ctor$(vevent__get_Id$(z), vevent__Summary$(z), vevent__get_LatLon$(z)));
      }
      else
      {
        return (new EventMarker___ctor$("", "", (new TupleDouble_Double(0.000000, 0.000000))));
      };
    });
    _1943 = (function (source)
    {
      return Seq__Map$calEvent__EventMarker_calEvent__EventMarker_(mapping, source);
    });
    _1942 = _1943(is);
    _1853 = _1854(_1942);
    _1339 = (function (source)
    {
      return Seq__Distinct$EventMarker_EventMarker_(source);
    })(_1853);
    _1297 = (function (source)
    {
      return Seq__ToArray$EventMarker_EventMarker_(source);
    })(_1339);
    var retr = _1297;
    return retr;
  });
  Page__asJQuery$Object_Object_ = (function (x)
  {
    return x;
  });
  Page__fetchNewPosition$ = (function (unitVar0)
  {
    (function (value)
    {
      var ignored0 = value;
    })(window.alert("Suoritetaan Google-paikannus, jos ei toimi, niin koita uusiksi..."));
    var getval = (function (item)
    {
      return Page__jQuery$(("#" + item)).val().toString();
    });
    return GoogleLatLong__FetchLatLong$("", ((getval("StreetAddress") + ", ") + getval("City")));
  });
  Page__jQuery$ = (function (command)
  {
    return jQuery(command);
  });
  Page__main$ = (function (unitVar0)
  {
    (function (value)
    {
      var ignored0 = value;
    })(Page__parseEventList$());
    var marks = Page__VeventsToMarkers$(EventItem__items);
    GoogleMap__showMyPosition$(Seq__OfArray$EventMarker_EventMarker_(marks));
    return Page__op_Dynamic$(jQuery, "fetchPosBtn").click((function (arg00_)
    {
      return Page__fetchNewPosition$();
    }));
  });
  Page__op_Dynamic$ = (function (jqx, name)
  {
    return jqx(("#" + name));
  });
  Page__parseEventList$ = (function (unitVar0)
  {
    var lst = Page__op_Dynamic$(jQuery, "maineventlist");
    var makedivi = (function (e)
    {
      return (function (c)
      {
        return (function (value)
        {
          var ignored0 = value;
        })(Page__asJQuery$Object_Object_(c).appendTo(lst));
      })((function (b)
      {
        return Page__asJQuery$Object_Object_(b).html((((("\u003cul\u003e\u003cli class=\"timeAndCity\"\u003e" + notification__get_Title$(e)) + "\u003c/li\u003e\r\n                                       \u003cli class=\"details\"\u003e") + notification__get_Details$(e)) + "\u003c/li\u003e\u003c/ul\u003e\r\n                                       \u003cp class=\"testitPistelinja\"\u003e\u003c/p\u003e"));
      })((function (a)
      {
        return Page__asJQuery$Object_Object_(a).attr("id", notification__get_Id$(e));
      })(Page__jQuery$("\u003cdiv /\u003e").attr("class", "myevent"))));
    });
    var makediv = (function (e)
    {
      return (function (c)
      {
        return (function (value)
        {
          var ignored0 = value;
        })(Page__asJQuery$Object_Object_(c).appendTo(lst));
      })((function (b)
      {
        return Page__asJQuery$Object_Object_(b).html((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((("\r\n            \u003ca id=\"L" + encodeURIComponent(vevent__get_Id$(e))) + "\"\u003e\r\n            \u003cdiv id=\u0027pop") + encodeURIComponent(vevent__get_Id$(e))) + "\u0027 title=\u0027Testi\u0027 class=\u0027event testipopup\u0027\u003e\r\n            \u003cul\u003e\r\n            \u003cli class=\"timeAndCity\"\u003e") + EventItem__jsDateFormatToUser$(vevent__get_StarTime$(e))) + " ") + vevent__get_City$(e)) + "\u003c/li\u003e\r\n            \u003cli class=\"location\"\u003e") + vevent__get_StreetAddress$(e)) + " \u003cbr /\u003e") + vevent__get_LocationDetails$(e)) + "\u003c/li\u003e\r\n            \u003cli class=\"info\"\u003e") + vevent__get_Details$(e)) + "\u003c/li\u003e\r\n            \u003cli class=\"info\"\u003e\u0026nbsp;\u003c/li\u003e\r\n            \u003cli class=\"info\"\u003e") + Page__jQuery$("#CalInfoDetails").text().toString()) + "\u003c/li\u003e\r\n            \u003cli class=\"info\"\u003e") + vevent__get_Title$(e)) + "\u003c/li\u003e\r\n            \u003cli class=\"info\"\u003e\u0026nbsp;\u003c/li\u003e\r\n            \u003c/ul\u003e\u003cdiv class=\"dialogiAlaosa\"\u003e\r\n            \u003cbutton id=\"opener") + vevent__get_Id$(e)) + "\" class=\"qrButton\"\u003e\u003cimg id=\"openeri") + vevent__get_Id$(e)) + "\" class=\"qrButton\" src=\"") + Page__jQuery$("#LocalizationQrcodeUrl").text().toString()) + "\" alt=\"QR\"/\u003e\u003c/button\u003e\r\n            \u003cbutton id=\"ical") + vevent__get_Id$(e)) + "\" class=\"icalButton\"\u003e\u003cimg id=\"icali") + vevent__get_Id$(e)) + "\" class=\"icalButton\" src=\"") + Page__jQuery$("#LocalizationIcalUrl").text().toString()) + "\" alt=\"iCal\"/\u003e\u003c/button\u003e\r\n            \u003c/div\u003e\u003c/div\u003e\r\n            \u003ca id=\"op") + encodeURIComponent(vevent__get_Id$(e))) + "\" href=\"#\"\u003e\u003cul\u003e\r\n            \u003cli class=\"technicaldate\"\u003e") + EventItem__jsDateFormatCalendar$(vevent__get_StarTime$(e))) + "\u003c/li\u003e\r\n            \u003cli class=\"timeAndCity\"\u003e") + EventItem__jsDateFormatToUserDay$(vevent__get_StarTime$(e))) + " ") + vevent__get_City$(e)) + "\u003c/li\u003e\r\n            \u003c/ul\u003e\u003c/a\u003e\u003cscript type=\"text/javascript\"\u003e\r\n$(function() {\r\n\r\n    $(\"#pop") + encodeURIComponent(vevent__get_Id$(e))) + "\").dialog({ autoOpen: false });\r\n    $(\"#op") + encodeURIComponent(vevent__get_Id$(e))) + "\").click(function(){$(\"#pop") + encodeURIComponent(vevent__get_Id$(e))) + "\").dialog(\"open\");return false;});\r\n    $(\"#opi") + encodeURIComponent(vevent__get_Id$(e))) + "\").hover(function(){$(\"#opi") + encodeURIComponent(vevent__get_Id$(e))) + "\").attr(\u0027src\u0027,\u0027") + Page__jQuery$("#LocalizationInfoHoverUrl").text().toString()) + "\u0027); }, function() { $(\"#opi") + encodeURIComponent(vevent__get_Id$(e))) + "\").attr(\u0027src\u0027,\u0027") + Page__jQuery$("#LocalizationInfoUrl").text().toString()) + "\u0027);});\r\n    $(\"#openeri") + vevent__get_Id$(e)) + "\").hover(function(){$(\"#openeri") + vevent__get_Id$(e)) + "\").attr(\u0027src\u0027,\u0027") + Page__jQuery$("#LocalizationQrcodeHoverUrl").text().toString()) + "\u0027); }, function() { $(\"#openeri") + vevent__get_Id$(e)) + "\").attr(\u0027src\u0027,\u0027") + Page__jQuery$("#LocalizationQrcodeUrl").text().toString()) + "\u0027);});\r\n    $(\"#icali") + vevent__get_Id$(e)) + "\").hover(function(){$(\"#icali") + vevent__get_Id$(e)) + "\").attr(\u0027src\u0027,\u0027") + Page__jQuery$("#LocalizationIcalHoverUrl").text().toString()) + "\u0027); }, function() { $(\"#icali") + vevent__get_Id$(e)) + "\").attr(\u0027src\u0027,\u0027") + Page__jQuery$("#LocalizationIcalUrl").text().toString()) + "\u0027);});\r\n\r\n    $(\"#opener") + vevent__get_Id$(e)) + "\").click(function() {\r\n        $(\"#iQRCode\").attr(\"src\",\"") + EventItem__fetchQRCodeUrl$((new calEvent__Vevent(e)))) + "\");\r\n        $(\"#dialog\").dialog(\"open\");\r\n    });\r\n    $(\"#ical") + vevent__get_Id$(e)) + "\").click(function() {\r\n        window.open(\"") + Page__jQuery$("#IcalPath").text().toString()) + "?itemId=") + (vevent__get_Id$(e) + "00")) + "\");\r\n    });\r\n});\r\n            \u003c/script\u003e\u003cp class=\"testitPistelinja\"\u003e\u003c/p\u003e\r\n            "));
      })((function (a)
      {
        return Page__asJQuery$Object_Object_(a).attr("id", vevent__get_Id$(e));
      })(Page__jQuery$("\u003cdiv /\u003e").attr("class", ("myevent " + EventItem__jsDateFormatCalendar$(vevent__get_StarTime$(e)))))));
    });
    var _602;
    var action = (function (i)
    {
      if ((i.Tag == 1.000000)) 
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
    _602 = (function (source)
    {
      return Seq__Iterate$calEvent_calEvent_(action, source);
    });
    return _602(EventItem__items);
  });
  Range__customStep$Int32__Int32_Int32_Int32 = (function (first, stepping, last)
  {
    var _1150;
    var f = (function (x)
    {
      if ((x <= last)) 
      {
        return {Tag: 1.000000, Value: (new TupleInt32_Int32(x, (x + stepping)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    });
    _1150 = (function (seed)
    {
      return Seq__Unfold$Int32__Int32_Int32_Int32(f, seed);
    });
    return _1150(first);
  });
  Range__oneStep$Int32_Int32 = (function (first, last)
  {
    return Range__customStep$Int32__Int32_Int32_Int32(first, GenericConstants__One$Int32_Int32(), last);
  });
  Seq__Choose$Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__EventMarker_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__EventMarker_ = (function (f, xs)
  {
    var trySkipToNext;
    trySkipToNext = (function (_enum)
    {
      if (_enum.MoveNext()) 
      {
        var matchValue = f(_enum.get_Current());
        if ((matchValue.Tag == 1.000000)) 
        {
          var value = Option__GetValue$EventMarker_EventMarker_(matchValue);
          return {Tag: 1.000000, Value: (new TupleEventMarker__IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_(value, _enum))};
        }
        else
        {
          return trySkipToNext(_enum);
        };
      }
      else
      {
        return {Tag: 0.000000};
      };
    });
    return (function (_f)
    {
      return Seq__Delay$EventMarker_EventMarker_(_f);
    })((function (unitVar0)
    {
      var _1364;
      var _f = trySkipToNext;
      _1364 = (function (seed)
      {
        return Seq__Unfold$IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__EventMarker_IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__EventMarker_(_f, seed);
      });
      return _1364(Seq__Enumerator$Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_(xs));
    }));
  });
  Seq__Delay$Double_Double = (function (f)
  {
    return Seq__FromFactory$Double_Double((function (unitVar0)
    {
      var _2427;
      var _2429;
      _2427 = f(_2429);
      return Seq__Enumerator$Double_Double(_2427);
    }));
  });
  Seq__Delay$EventMarker_EventMarker_ = (function (f)
  {
    return Seq__FromFactory$EventMarker_EventMarker_((function (unitVar0)
    {
      var _1354;
      var _1356;
      _1354 = f(_1356);
      return Seq__Enumerator$EventMarker_EventMarker_(_1354);
    }));
  });
  Seq__Delay$Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_ = (function (f)
  {
    return Seq__FromFactory$Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_((function (unitVar0)
    {
      var _1759;
      var _1761;
      _1759 = f(_1761);
      return Seq__Enumerator$Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_(_1759);
    }));
  });
  Seq__Delay$calEvent_calEvent_ = (function (f)
  {
    return Seq__FromFactory$calEvent_calEvent_((function (unitVar0)
    {
      var _1054;
      var _1056;
      _1054 = f(_1056);
      return Seq__Enumerator$calEvent_calEvent_(_1054);
    }));
  });
  Seq__Distinct$EventMarker_EventMarker_ = (function (xs)
  {
    return Seq__DistinctBy$EventMarker__EventMarker_EventMarker__EventMarker_((function (x)
    {
      return x;
    }), xs);
  });
  Seq__DistinctBy$EventMarker__EventMarker_EventMarker__EventMarker_ = (function (f, xs)
  {
    var _1346;
    var _f = (function (tuple)
    {
      return tuple.Items[0.000000];
    });
    _1346 = (function (_xs)
    {
      return Seq__Choose$Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__EventMarker_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__EventMarker_(_f, _xs);
    });
    return _1346(Seq__Scan$Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__EventMarker_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__EventMarker_((function (tupledArg)
    {
      var _arg1 = tupledArg.Items[0.000000];
      var acc = tupledArg.Items[1.000000];
      return (function (x)
      {
        var y = f(x);
        if ((function (set)
        {
          return Set__Contains$EventMarker_EventMarker_(y, set);
        })(acc)) 
        {
          return (new TupleFSharpOption_1_EventMarker__FSharpSet_1_EventMarker_({Tag: 0.000000}, acc));
        }
        else
        {
          return (new TupleFSharpOption_1_EventMarker__FSharpSet_1_EventMarker_({Tag: 1.000000, Value: x}, (function (set)
          {
            return Set__Add$EventMarker_EventMarker_(y, set);
          })(acc)));
        };
      });
    }), (new TupleFSharpOption_1_EventMarker__FSharpSet_1_EventMarker_({Tag: 0.000000}, Set__Empty$EventMarker_EventMarker_())), xs));
  });
  Seq__Enumerator$Double_Double = (function (xs)
  {
    return xs.GetEnumerator();
  });
  Seq__Enumerator$EventMarker_EventMarker_ = (function (xs)
  {
    return xs.GetEnumerator();
  });
  Seq__Enumerator$Int32_Int32 = (function (xs)
  {
    return xs.GetEnumerator();
  });
  Seq__Enumerator$Result_Result_ = (function (xs)
  {
    return xs.GetEnumerator();
  });
  Seq__Enumerator$Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_ = (function (xs)
  {
    return xs.GetEnumerator();
  });
  Seq__Enumerator$calEvent_calEvent_ = (function (xs)
  {
    return xs.GetEnumerator();
  });
  Seq__Filter$EventMarker_EventMarker_ = (function (f, xs)
  {
    var trySkipToNext;
    trySkipToNext = (function (_enum)
    {
      if (_enum.MoveNext()) 
      {
        if (f(_enum.get_Current())) 
        {
          return {Tag: 1.000000, Value: (new TupleEventMarker__IEnumerator_1_EventMarker_(_enum.get_Current(), _enum))};
        }
        else
        {
          return trySkipToNext(_enum);
        };
      }
      else
      {
        return {Tag: 0.000000};
      };
    });
    return (function (_f)
    {
      return Seq__Delay$EventMarker_EventMarker_(_f);
    })((function (unitVar0)
    {
      var _1867;
      var _f = trySkipToNext;
      _1867 = (function (seed)
      {
        return Seq__Unfold$IEnumerator_1_EventMarker__EventMarker_IEnumerator_1_EventMarker__EventMarker_(_f, seed);
      });
      return _1867(Seq__Enumerator$EventMarker_EventMarker_(xs));
    }));
  });
  Seq__Fold$Double__Double_Double_Double = (function (f, seed, xs)
  {
    return Seq__FoldIndexed$Double__Double_Double_Double((function (_arg1)
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
  Seq__Fold$EventMarker__Unit_EventMarker__Unit_ = (function (f, seed, xs)
  {
    return Seq__FoldIndexed$EventMarker__Unit_EventMarker__Unit_((function (_arg1)
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
  Seq__Fold$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_ = (function (f, seed, xs)
  {
    return Seq__FoldIndexed$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_((function (_arg1)
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
  Seq__Fold$calEvent__Unit_calEvent__Unit_ = (function (f, seed, xs)
  {
    return Seq__FoldIndexed$calEvent__Unit_calEvent__Unit_((function (_arg1)
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
  Seq__FoldIndexed$Double__Double_Double_Double = (function (f, seed, xs)
  {
    return Seq__FoldIndexedAux$Double__Double_Double_Double(f, 0, seed, Seq__Enumerator$Double_Double(xs));
  });
  Seq__FoldIndexed$EventMarker__Unit_EventMarker__Unit_ = (function (f, seed, xs)
  {
    return Seq__FoldIndexedAux$Unit__EventMarker_Unit__EventMarker_(f, 0, seed, Seq__Enumerator$EventMarker_EventMarker_(xs));
  });
  Seq__FoldIndexed$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_ = (function (f, seed, xs)
  {
    return Seq__FoldIndexedAux$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32(f, 0, seed, Seq__Enumerator$Int32_Int32(xs));
  });
  Seq__FoldIndexed$calEvent__Unit_calEvent__Unit_ = (function (f, seed, xs)
  {
    return Seq__FoldIndexedAux$Unit__calEvent_Unit__calEvent_(f, 0, seed, Seq__Enumerator$calEvent_calEvent_(xs));
  });
  Seq__FoldIndexedAux$Double__Double_Double_Double = (function (f, i, acc, xs)
  {
    if (xs.MoveNext()) 
    {
      return Seq__FoldIndexedAux$Double__Double_Double_Double(f, (i + 1), f(i)(acc)(xs.get_Current()), xs);
    }
    else
    {
      return acc;
    };
  });
  Seq__FoldIndexedAux$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32 = (function (f, i, acc, xs)
  {
    if (xs.MoveNext()) 
    {
      return Seq__FoldIndexedAux$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32(f, (i + 1), f(i)(acc)(xs.get_Current()), xs);
    }
    else
    {
      return acc;
    };
  });
  Seq__FoldIndexedAux$Unit__EventMarker_Unit__EventMarker_ = (function (f, i, acc, xs)
  {
    if (xs.MoveNext()) 
    {
      return Seq__FoldIndexedAux$Unit__EventMarker_Unit__EventMarker_(f, (i + 1), f(i)(acc)(xs.get_Current()), xs);
    }
    else
    {
      return acc;
    };
  });
  Seq__FoldIndexedAux$Unit__calEvent_Unit__calEvent_ = (function (f, i, acc, xs)
  {
    if (xs.MoveNext()) 
    {
      return Seq__FoldIndexedAux$Unit__calEvent_Unit__calEvent_(f, (i + 1), f(i)(acc)(xs.get_Current()), xs);
    }
    else
    {
      return acc;
    };
  });
  Seq__FromFactory$Double_Double = (function (f)
  {
    var impl;
    impl = (new CreateEnumerable_1_Double___ctor$Double(f));
    return {GetEnumerator: (function (unitVar1)
    {
      return (function (__, unitVar1)
      {
        var _2379;
        return __.factory(_2379);
      })(impl, unitVar1);
    })};
  });
  Seq__FromFactory$EventMarker_EventMarker_ = (function (f)
  {
    var impl;
    impl = (new CreateEnumerable_1_EventMarker___ctor$EventMarker_(f));
    return {GetEnumerator: (function (unitVar1)
    {
      return (function (__, unitVar1)
      {
        var _1359;
        return __.factory(_1359);
      })(impl, unitVar1);
    })};
  });
  Seq__FromFactory$Int32_Int32 = (function (f)
  {
    var impl;
    impl = (new CreateEnumerable_1_Int32___ctor$Int32(f));
    return {GetEnumerator: (function (unitVar1)
    {
      return (function (__, unitVar1)
      {
        var _1046;
        return __.factory(_1046);
      })(impl, unitVar1);
    })};
  });
  Seq__FromFactory$Result_Result_ = (function (f)
  {
    var impl;
    impl = (new CreateEnumerable_1_Result___ctor$Result_(f));
    return {GetEnumerator: (function (unitVar1)
    {
      return (function (__, unitVar1)
      {
        var _2642;
        return __.factory(_2642);
      })(impl, unitVar1);
    })};
  });
  Seq__FromFactory$Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_ = (function (f)
  {
    var impl;
    impl = (new CreateEnumerable_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker___ctor$Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_(f));
    return {GetEnumerator: (function (unitVar1)
    {
      return (function (__, unitVar1)
      {
        var _1764;
        return __.factory(_1764);
      })(impl, unitVar1);
    })};
  });
  Seq__FromFactory$calEvent_calEvent_ = (function (f)
  {
    var impl;
    impl = (new CreateEnumerable_1_calEvent___ctor$calEvent_(f));
    return {GetEnumerator: (function (unitVar1)
    {
      return (function (__, unitVar1)
      {
        var _1059;
        return __.factory(_1059);
      })(impl, unitVar1);
    })};
  });
  Seq__Head$Double_Double = (function (xs)
  {
    var enumerator = Seq__Enumerator$Double_Double(xs);
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
  Seq__Head$Result_Result_ = (function (xs)
  {
    var enumerator = Seq__Enumerator$Result_Result_(xs);
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
  Seq__IsEmpty$EventMarker_EventMarker_ = (function (xs)
  {
    return (!Seq__Enumerator$EventMarker_EventMarker_(xs).MoveNext());
  });
  Seq__IsEmpty$Result_Result_ = (function (xs)
  {
    return (!Seq__Enumerator$Result_Result_(xs).MoveNext());
  });
  Seq__Iterate$EventMarker_EventMarker_ = (function (f, xs)
  {
    var _2198;
    return Seq__Fold$EventMarker__Unit_EventMarker__Unit_((function (unitVar0)
    {
      return (function (x)
      {
        return f(x);
      });
    }), _2198, xs);
  });
  Seq__Iterate$calEvent_calEvent_ = (function (f, xs)
  {
    var _623;
    return Seq__Fold$calEvent__Unit_calEvent__Unit_((function (unitVar0)
    {
      return (function (x)
      {
        return f(x);
      });
    }), _623, xs);
  });
  Seq__IterateIndexed$EventMarker_EventMarker_ = (function (f, xs)
  {
    var _1315;
    return Seq__FoldIndexed$EventMarker__Unit_EventMarker__Unit_((function (i)
    {
      return (function (unitVar1)
      {
        return (function (x)
        {
          return f(i)(x);
        });
      });
    }), _1315, xs);
  });
  Seq__Map$EventMarker__Double_EventMarker__Double = (function (f, xs)
  {
    return (function (_f)
    {
      return Seq__Delay$Double_Double(_f);
    })((function (unitVar0)
    {
      var _2431;
      var _f = (function (_enum)
      {
        if (_enum.MoveNext()) 
        {
          return {Tag: 1.000000, Value: (new TupleDouble_IEnumerator_1_EventMarker_(f(_enum.get_Current()), _enum))};
        }
        else
        {
          return {Tag: 0.000000};
        };
      });
      _2431 = (function (seed)
      {
        return Seq__Unfold$IEnumerator_1_EventMarker__Double_IEnumerator_1_EventMarker__Double(_f, seed);
      });
      return _2431(Seq__Enumerator$EventMarker_EventMarker_(xs));
    }));
  });
  Seq__Map$Int32__calEvent_Int32_calEvent_ = (function (f, xs)
  {
    return (function (_f)
    {
      return Seq__Delay$calEvent_calEvent_(_f);
    })((function (unitVar0)
    {
      var _1064;
      var _f = (function (_enum)
      {
        if (_enum.MoveNext()) 
        {
          return {Tag: 1.000000, Value: (new TuplecalEvent__IEnumerator_1_Int32_(f(_enum.get_Current()), _enum))};
        }
        else
        {
          return {Tag: 0.000000};
        };
      });
      _1064 = (function (seed)
      {
        return Seq__Unfold$IEnumerator_1_Int32__calEvent_IEnumerator_1_Int32__calEvent_(_f, seed);
      });
      return _1064(Seq__Enumerator$Int32_Int32(xs));
    }));
  });
  Seq__Map$calEvent__EventMarker_calEvent__EventMarker_ = (function (f, xs)
  {
    return (function (_f)
    {
      return Seq__Delay$EventMarker_EventMarker_(_f);
    })((function (unitVar0)
    {
      var _1998;
      var _f = (function (_enum)
      {
        if (_enum.MoveNext()) 
        {
          return {Tag: 1.000000, Value: (new TupleEventMarker__IEnumerator_1_calEvent_(f(_enum.get_Current()), _enum))};
        }
        else
        {
          return {Tag: 0.000000};
        };
      });
      _1998 = (function (seed)
      {
        return Seq__Unfold$IEnumerator_1_calEvent__EventMarker_IEnumerator_1_calEvent__EventMarker_(_f, seed);
      });
      return _1998(Seq__Enumerator$calEvent_calEvent_(xs));
    }));
  });
  Seq__MinBy$Double__Double_Double_Double = (function (f, xs)
  {
    return Seq__Reduce$Double_Double((function (x)
    {
      return (function (y)
      {
        if ((f(y) > f(x))) 
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
  Seq__OfArray$EventMarker_EventMarker_ = (function (xs)
  {
    var _2071;
    var f = (function (i)
    {
      if ((i < Array__BoxedLength$(xs))) 
      {
        return {Tag: 1.000000, Value: (new TupleEventMarker__Int32(xs[i], (i + 1)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    });
    _2071 = (function (seed)
    {
      return Seq__Unfold$Int32__EventMarker_Int32_EventMarker_(f, seed);
    });
    return _2071(0);
  });
  Seq__OfArray$Result_Result_ = (function (xs)
  {
    var _2570;
    var f = (function (i)
    {
      if ((i < Array__BoxedLength$(xs))) 
      {
        return {Tag: 1.000000, Value: (new TupleResult__Int32(xs[i], (i + 1)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    });
    _2570 = (function (seed)
    {
      return Seq__Unfold$Int32__Result_Int32_Result_(f, seed);
    });
    return _2570(0);
  });
  Seq__OfList$Int32_Int32 = (function (xs)
  {
    var _955;
    var f = (function (_arg1)
    {
      if ((_arg1.Tag == 1.000000)) 
      {
        var _xs = List__Tail$Int32_Int32(_arg1);
        var x = List__Head$Int32_Int32(_arg1);
        return {Tag: 1.000000, Value: (new TupleInt32_FSharpList_1_Int32_(x, _xs))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    });
    _955 = (function (seed)
    {
      return Seq__Unfold$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32(f, seed);
    });
    return _955(xs);
  });
  Seq__Reduce$Double_Double = (function (f, xs)
  {
    var first = Seq__Head$Double_Double(xs);
    var rest = Seq__Skip$Double_Double(1, xs);
    return Seq__Fold$Double__Double_Double_Double(f, first, rest);
  });
  Seq__Scan$Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__EventMarker_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__EventMarker_ = (function (f, seed, xs)
  {
    return (function (_f)
    {
      return Seq__Delay$Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_(_f);
    })((function (unitVar0)
    {
      var _xs = Seq__Enumerator$EventMarker_EventMarker_(xs);
      var _1771;
      var _f = (function (_arg1)
      {
        if ((_arg1.Tag == 1.000000)) 
        {
          var acc = Option__GetValue$Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_(_arg1);
          if (_xs.MoveNext()) 
          {
            var _acc = f(acc)(_xs.get_Current());
            return {Tag: 1.000000, Value: (new TupleTuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_(_acc, {Tag: 1.000000, Value: _acc}))};
          }
          else
          {
            return {Tag: 0.000000};
          };
        }
        else
        {
          return {Tag: 1.000000, Value: (new TupleTuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_(seed, {Tag: 1.000000, Value: seed}))};
        };
      });
      _1771 = (function (_seed)
      {
        return Seq__Unfold$FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_(_f, _seed);
      });
      return _1771({Tag: 0.000000});
    }));
  });
  Seq__Skip$Double_Double = (function (n, xs)
  {
    return Seq__FromFactory$Double_Double((function (unitVar0)
    {
      var _enum = Seq__Enumerator$Double_Double(xs);
      for (var _2376 = 1; _2376 <= n; _2376++)
      {
        (function (i)
        {
          (function (value)
          {
            var ignored0 = value;
          })(_enum.MoveNext());
        })(_2376);
      };
      return _enum;
    }));
  });
  Seq__ToArray$EventMarker_EventMarker_ = (function (xs)
  {
    var ys = Array__ZeroCreate$EventMarker_EventMarker_(0);
    var _1303;
    var f = (function (i)
    {
      return (function (x)
      {
        ys[i] = x;
        return null;
      });
    });
    _1303 = (function (_xs)
    {
      return Seq__IterateIndexed$EventMarker_EventMarker_(f, _xs);
    });
    _1303(xs);
    return ys;
  });
  Seq__ToList$Int32_Int32 = (function (xs)
  {
    return (function (list)
    {
      return List__Reverse$Int32_Int32(list);
    })(Seq__Fold$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_((function (acc)
    {
      return (function (x)
      {
        return List__CreateCons$Int32_Int32(x, acc);
      });
    }), List__Empty$Int32_Int32(), xs));
  });
  Seq__Unfold$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32 = (function (f, seed)
  {
    return Seq__FromFactory$Int32_Int32((function (unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_FSharpList_1_Int32__Int32___ctor$FSharpList_1_Int32__Int32(seed, f));
      return {get_Current: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          var next = (function (_unitVar0)
          {
            var currAcc = Option__GetValue$FSharpList_1_Int32_FSharpList_1_Int32_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Int32__FSharpList_1_Int32_Tuple_2_Int32__FSharpList_1_Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Int32__FSharpList_1_Int32_Tuple_2_Int32__FSharpList_1_Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$FSharpList_1_Int32_FSharpList_1_Int32_(__.acc) && (function ()
          {
            var _1025;
            return next(_1025);
          })());
        })(impl, unitVar1);
      }), Reset: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
  });
  Seq__Unfold$FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_ = (function (f, seed)
  {
    return Seq__FromFactory$Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_((function (unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker___ctor$FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_(seed, f));
      return {get_Current: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          var next = (function (_unitVar0)
          {
            var currAcc = Option__GetValue$FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_Tuple_2_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_Tuple_2_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_(__.acc) && (function ()
          {
            var _1833;
            return next(_1833);
          })());
        })(impl, unitVar1);
      }), Reset: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
  });
  Seq__Unfold$IEnumerator_1_EventMarker__Double_IEnumerator_1_EventMarker__Double = (function (f, seed)
  {
    return Seq__FromFactory$Double_Double((function (unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_IEnumerator_1_EventMarker__Double___ctor$IEnumerator_1_EventMarker__Double(seed, f));
      return {get_Current: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          var next = (function (_unitVar0)
          {
            var currAcc = Option__GetValue$IEnumerator_1_EventMarker_IEnumerator_1_EventMarker_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Double__IEnumerator_1_EventMarker_Tuple_2_Double__IEnumerator_1_EventMarker_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Double__IEnumerator_1_EventMarker_Tuple_2_Double__IEnumerator_1_EventMarker_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$IEnumerator_1_EventMarker_IEnumerator_1_EventMarker_(__.acc) && (function ()
          {
            var _2478;
            return next(_2478);
          })());
        })(impl, unitVar1);
      }), Reset: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
  });
  Seq__Unfold$IEnumerator_1_EventMarker__EventMarker_IEnumerator_1_EventMarker__EventMarker_ = (function (f, seed)
  {
    return Seq__FromFactory$EventMarker_EventMarker_((function (unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_IEnumerator_1_EventMarker__EventMarker___ctor$IEnumerator_1_EventMarker__EventMarker_(seed, f));
      return {get_Current: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          var next = (function (_unitVar0)
          {
            var currAcc = Option__GetValue$IEnumerator_1_EventMarker_IEnumerator_1_EventMarker_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_EventMarker__IEnumerator_1_EventMarker_Tuple_2_EventMarker__IEnumerator_1_EventMarker_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_EventMarker__IEnumerator_1_EventMarker_Tuple_2_EventMarker__IEnumerator_1_EventMarker_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$IEnumerator_1_EventMarker_IEnumerator_1_EventMarker_(__.acc) && (function ()
          {
            var _1908;
            return next(_1908);
          })());
        })(impl, unitVar1);
      }), Reset: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
  });
  Seq__Unfold$IEnumerator_1_Int32__calEvent_IEnumerator_1_Int32__calEvent_ = (function (f, seed)
  {
    return Seq__FromFactory$calEvent_calEvent_((function (unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_IEnumerator_1_Int32__calEvent___ctor$IEnumerator_1_Int32__calEvent_(seed, f));
      return {get_Current: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          var next = (function (_unitVar0)
          {
            var currAcc = Option__GetValue$IEnumerator_1_Int32_IEnumerator_1_Int32_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_calEvent__IEnumerator_1_Int32_Tuple_2_calEvent__IEnumerator_1_Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_calEvent__IEnumerator_1_Int32_Tuple_2_calEvent__IEnumerator_1_Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$IEnumerator_1_Int32_IEnumerator_1_Int32_(__.acc) && (function ()
          {
            var _1113;
            return next(_1113);
          })());
        })(impl, unitVar1);
      }), Reset: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
  });
  Seq__Unfold$IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__EventMarker_IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__EventMarker_ = (function (f, seed)
  {
    return Seq__FromFactory$EventMarker_EventMarker_((function (unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__EventMarker___ctor$IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__EventMarker_(seed, f));
      return {get_Current: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          var next = (function (_unitVar0)
          {
            var currAcc = Option__GetValue$IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_EventMarker__IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_Tuple_2_EventMarker__IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_EventMarker__IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_Tuple_2_EventMarker__IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_(__.acc) && (function ()
          {
            var _1405;
            return next(_1405);
          })());
        })(impl, unitVar1);
      }), Reset: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
  });
  Seq__Unfold$IEnumerator_1_calEvent__EventMarker_IEnumerator_1_calEvent__EventMarker_ = (function (f, seed)
  {
    return Seq__FromFactory$EventMarker_EventMarker_((function (unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_IEnumerator_1_calEvent__EventMarker___ctor$IEnumerator_1_calEvent__EventMarker_(seed, f));
      return {get_Current: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          var next = (function (_unitVar0)
          {
            var currAcc = Option__GetValue$IEnumerator_1_calEvent_IEnumerator_1_calEvent_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_EventMarker__IEnumerator_1_calEvent_Tuple_2_EventMarker__IEnumerator_1_calEvent_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_EventMarker__IEnumerator_1_calEvent_Tuple_2_EventMarker__IEnumerator_1_calEvent_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$IEnumerator_1_calEvent_IEnumerator_1_calEvent_(__.acc) && (function ()
          {
            var _2047;
            return next(_2047);
          })());
        })(impl, unitVar1);
      }), Reset: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
  });
  Seq__Unfold$Int32__EventMarker_Int32_EventMarker_ = (function (f, seed)
  {
    return Seq__FromFactory$EventMarker_EventMarker_((function (unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__EventMarker___ctor$Int32_EventMarker_(seed, f));
      return {get_Current: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          var next = (function (_unitVar0)
          {
            var currAcc = Option__GetValue$Int32_Int32(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_EventMarker__Int32_Tuple_2_EventMarker__Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_EventMarker__Int32_Tuple_2_EventMarker__Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$Int32_Int32(__.acc) && (function ()
          {
            var _2122;
            return next(_2122);
          })());
        })(impl, unitVar1);
      }), Reset: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
  });
  Seq__Unfold$Int32__Int32_Int32_Int32 = (function (f, seed)
  {
    return Seq__FromFactory$Int32_Int32((function (unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32(seed, f));
      return {get_Current: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          var next = (function (_unitVar0)
          {
            var currAcc = Option__GetValue$Int32_Int32(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$Int32_Int32(__.acc) && (function ()
          {
            var _1199;
            return next(_1199);
          })());
        })(impl, unitVar1);
      }), Reset: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
  });
  Seq__Unfold$Int32__Result_Int32_Result_ = (function (f, seed)
  {
    return Seq__FromFactory$Result_Result_((function (unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__Result___ctor$Int32_Result_(seed, f));
      return {get_Current: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          var next = (function (_unitVar0)
          {
            var currAcc = Option__GetValue$Int32_Int32(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Result__Int32_Tuple_2_Result__Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Result__Int32_Tuple_2_Result__Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$Int32_Int32(__.acc) && (function ()
          {
            var _2621;
            return next(_2621);
          })());
        })(impl, unitVar1);
      }), Reset: (function (unitVar1)
      {
        return (function (__, unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
  });
  SetTreeModule__SetNode$EventMarker_EventMarker_ = (function (x, l, r, h)
  {
    return (new SetTree_1_EventMarker__SetNodeEventMarker_(x, l, r, h));
  });
  SetTreeModule__SetOne$EventMarker_EventMarker_ = (function (n)
  {
    return (new SetTree_1_EventMarker__SetOneEventMarker_(n));
  });
  SetTreeModule__add$EventMarker_EventMarker_ = (function (comparer, k, t)
  {
    if ((t.Tag == 2.000000)) 
    {
      var k2 = t.Item;
      var c = comparer.Compare(k, k2);
      if ((c < 0)) 
      {
        return SetTreeModule__SetNode$EventMarker_EventMarker_(k, (new SetTree_1_EventMarker__SetEmptyEventMarker_()), t, 2);
      }
      else
      {
        if ((c == 0)) 
        {
          return t;
        }
        else
        {
          return SetTreeModule__SetNode$EventMarker_EventMarker_(k, t, (new SetTree_1_EventMarker__SetEmptyEventMarker_()), 2);
        };
      };
    }
    else
    {
      if ((t.Tag == 0.000000)) 
      {
        return SetTreeModule__SetOne$EventMarker_EventMarker_(k);
      }
      else
      {
        var r = t.Item3;
        var l = t.Item2;
        var _k2 = t.Item1;
        var _c = comparer.Compare(k, _k2);
        if ((_c < 0)) 
        {
          return SetTreeModule__rebalance$EventMarker_EventMarker_(SetTreeModule__add$EventMarker_EventMarker_(comparer, k, l), _k2, r);
        }
        else
        {
          if ((_c == 0)) 
          {
            return t;
          }
          else
          {
            return SetTreeModule__rebalance$EventMarker_EventMarker_(l, _k2, SetTreeModule__add$EventMarker_EventMarker_(comparer, k, r));
          };
        };
      };
    };
  });
  SetTreeModule__get_tolerance$ = (function ()
  {
    return 2;
  });
  SetTreeModule__height$EventMarker_EventMarker_ = (function (t)
  {
    if ((t.Tag == 2.000000)) 
    {
      return 1;
    }
    else
    {
      if ((t.Tag == 1.000000)) 
      {
        var h = t.Item4;
        return h;
      }
      else
      {
        return 0;
      };
    };
  });
  SetTreeModule__mem$EventMarker_EventMarker_ = (function (comparer, k, t)
  {
    if ((t.Tag == 2.000000)) 
    {
      var k2 = t.Item;
      return (comparer.Compare(k, k2) == 0);
    }
    else
    {
      if ((t.Tag == 0.000000)) 
      {
        return false;
      }
      else
      {
        var r = t.Item3;
        var l = t.Item2;
        var _k2 = t.Item1;
        var c = comparer.Compare(k, _k2);
        if ((c < 0)) 
        {
          return SetTreeModule__mem$EventMarker_EventMarker_(comparer, k, l);
        }
        else
        {
          return ((c == 0) || SetTreeModule__mem$EventMarker_EventMarker_(comparer, k, r));
        };
      };
    };
  });
  SetTreeModule__mk$EventMarker_EventMarker_ = (function (l, k, r)
  {
    var matchValue = (new TupleSetTree_1_EventMarker__SetTree_1_EventMarker_(l, r));
    if ((matchValue.Items[0.000000].Tag == 0.000000)) 
    {
      if ((matchValue.Items[1.000000].Tag == 0.000000)) 
      {
        return SetTreeModule__SetOne$EventMarker_EventMarker_(k);
      }
      else
      {
        var hl = SetTreeModule__height$EventMarker_EventMarker_(l);
        var hr = SetTreeModule__height$EventMarker_EventMarker_(r);
        var _1641;
        if ((hl < hr)) 
        {
          _1641 = hr;
        }
        else
        {
          _1641 = hl;
        };
        var m = _1641;
        return SetTreeModule__SetNode$EventMarker_EventMarker_(k, l, r, (m + 1));
      };
    }
    else
    {
      var _hl = SetTreeModule__height$EventMarker_EventMarker_(l);
      var _hr = SetTreeModule__height$EventMarker_EventMarker_(r);
      var _1655;
      if ((_hl < _hr)) 
      {
        _1655 = _hr;
      }
      else
      {
        _1655 = _hl;
      };
      var _m = _1655;
      return SetTreeModule__SetNode$EventMarker_EventMarker_(k, l, r, (_m + 1));
    };
  });
  SetTreeModule__rebalance$EventMarker_EventMarker_ = (function (t1, k, t2)
  {
    var t1h = SetTreeModule__height$EventMarker_EventMarker_(t1);
    var t2h = SetTreeModule__height$EventMarker_EventMarker_(t2);
    if ((t2h > (t1h + SetTreeModule__tolerance))) 
    {
      if ((t2.Tag == 1.000000)) 
      {
        var t2r = t2.Item3;
        var t2l = t2.Item2;
        var t2k = t2.Item1;
        if ((SetTreeModule__height$EventMarker_EventMarker_(t2l) > (t1h + 1))) 
        {
          if ((t2l.Tag == 1.000000)) 
          {
            var t2lr = t2l.Item3;
            var t2ll = t2l.Item2;
            var t2lk = t2l.Item1;
            return SetTreeModule__mk$EventMarker_EventMarker_(SetTreeModule__mk$EventMarker_EventMarker_(t1, k, t2ll), t2lk, SetTreeModule__mk$EventMarker_EventMarker_(t2lr, t2k, t2r));
          }
          else
          {
            throw ("rebalance");
            return null;
          };
        }
        else
        {
          return SetTreeModule__mk$EventMarker_EventMarker_(SetTreeModule__mk$EventMarker_EventMarker_(t1, k, t2l), t2k, t2r);
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
      if ((t1h > (t2h + SetTreeModule__tolerance))) 
      {
        if ((t1.Tag == 1.000000)) 
        {
          var t1r = t1.Item3;
          var t1l = t1.Item2;
          var t1k = t1.Item1;
          if ((SetTreeModule__height$EventMarker_EventMarker_(t1r) > (t2h + 1))) 
          {
            if ((t1r.Tag == 1.000000)) 
            {
              var t1rr = t1r.Item3;
              var t1rl = t1r.Item2;
              var t1rk = t1r.Item1;
              return SetTreeModule__mk$EventMarker_EventMarker_(SetTreeModule__mk$EventMarker_EventMarker_(t1l, t1k, t1rl), t1rk, SetTreeModule__mk$EventMarker_EventMarker_(t1rr, k, t2));
            }
            else
            {
              throw ("rebalance");
              return null;
            };
          }
          else
          {
            return SetTreeModule__mk$EventMarker_EventMarker_(t1l, t1k, SetTreeModule__mk$EventMarker_EventMarker_(t1r, k, t2));
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
        return SetTreeModule__mk$EventMarker_EventMarker_(t1, k, t2);
      };
    };
  });
  SetTree_1_EventMarker__SetEmptyEventMarker_ = (function ()
  {
    this.Tag = 0.000000;
    this._CaseName = "SetEmpty";
  });
  SetTree_1_EventMarker__SetEmptyEventMarker_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.Tag < that.Tag) ? -1.000000 : ((this.Tag == that.Tag) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      return 0.000000;
    };
  });
  SetTree_1_EventMarker__SetNodeEventMarker_ = (function (Item1, Item2, Item3, Item4)
  {
    this.Tag = 1.000000;
    this._CaseName = "SetNode";
    this.Item1 = Item1;
    this.Item2 = Item2;
    this.Item3 = Item3;
    this.Item4 = Item4;
  });
  SetTree_1_EventMarker__SetNodeEventMarker_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.Tag < that.Tag) ? -1.000000 : ((this.Tag == that.Tag) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Item1.CompareTo(that.Item1);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        var ___diff = 0.000000;
        ___diff = this.Item2.CompareTo(that.Item2);
        diff = ___diff;
        if ((diff != 0.000000)) 
        {
          return diff;
        }
        else
        {
          var ____diff = 0.000000;
          ____diff = this.Item3.CompareTo(that.Item3);
          diff = ____diff;
          if ((diff != 0.000000)) 
          {
            return diff;
          }
          else
          {
            var _____diff = 0.000000;
            _____diff = ((this.Item4 < that.Item4) ? -1.000000 : ((this.Item4 == that.Item4) ? 0.000000 : 1.000000));
            diff = _____diff;
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
      };
    };
  });
  SetTree_1_EventMarker__SetOneEventMarker_ = (function (Item)
  {
    this.Tag = 2.000000;
    this._CaseName = "SetOne";
    this.Item = Item;
  });
  SetTree_1_EventMarker__SetOneEventMarker_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.Tag < that.Tag) ? -1.000000 : ((this.Tag == that.Tag) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Item.CompareTo(that.Item);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  Set_1_EventMarker__Add$EventMarker_ = (function (s, x)
  {
    return (new Set_1_EventMarker___ctor$EventMarker_(Set_1_EventMarker__get_Comparer$EventMarker_(s), SetTreeModule__add$EventMarker_EventMarker_(Set_1_EventMarker__get_Comparer$EventMarker_(s), x, Set_1_EventMarker__get_Tree$EventMarker_(s))));
  });
  Set_1_EventMarker__Contains$EventMarker_ = (function (s, x)
  {
    return SetTreeModule__mem$EventMarker_EventMarker_(Set_1_EventMarker__get_Comparer$EventMarker_(s), x, Set_1_EventMarker__get_Tree$EventMarker_(s));
  });
  Set_1_EventMarker___ctor$EventMarker_ = (function (comparer, tree)
  {
    this.comparer_479 = comparer;
    this.tree_483 = tree;
    this.serializedData = null;
  });
  Set_1_EventMarker__get_Comparer$EventMarker_ = (function (set, unitVar1)
  {
    return set.comparer_479;
  });
  Set_1_EventMarker__get_Empty$EventMarker_ = (function (unitVar0)
  {
    var comparer = (new GenericComparer_1_EventMarker___ctor$EventMarker_());
    var _1751;
    var impl;
    impl = comparer;
    _1751 = {Compare: (function (x, y)
    {
      return (function (__, x, y)
      {
        var diff = 0.000000;
        diff = x.CompareTo(y);
        return diff;
      })(impl, x, y);
    })};
    return (new Set_1_EventMarker___ctor$EventMarker_(_1751, (new SetTree_1_EventMarker__SetEmptyEventMarker_())));
  });
  Set_1_EventMarker__get_Tree$EventMarker_ = (function (set, unitVar1)
  {
    return set.tree_483;
  });
  Set__Add$EventMarker_EventMarker_ = (function (x, s)
  {
    return Set_1_EventMarker__Add$EventMarker_(s, x);
  });
  Set__Contains$EventMarker_EventMarker_ = (function (x, s)
  {
    return Set_1_EventMarker__Contains$EventMarker_(s, x);
  });
  Set__Empty$EventMarker_EventMarker_ = (function ()
  {
    return Set_1_EventMarker__get_Empty$EventMarker_();
  });
  String__Length$ = (function (s)
  {
    return s.length;
  });
  TupleDouble_Double = (function (Item0, Item1)
  {
    this.Items = [Item0, Item1];
    this.Items = [Item0, Item1];
  });
  TupleDouble_Double.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.Items[0.000000] < that.Items[0.000000]) ? -1.000000 : ((this.Items[0.000000] == that.Items[0.000000]) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = ((this.Items[1.000000] < that.Items[1.000000]) ? -1.000000 : ((this.Items[1.000000] == that.Items[1.000000]) ? 0.000000 : 1.000000));
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  TupleDouble_IEnumerator_1_EventMarker_ = (function (Item0, Item1)
  {
    this.Items = [Item0, Item1];
    this.Items = [Item0, Item1];
  });
  TupleDouble_IEnumerator_1_EventMarker_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.Items[0.000000] < that.Items[0.000000]) ? -1.000000 : ((this.Items[0.000000] == that.Items[0.000000]) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Items[1.000000].CompareTo(that.Items[1.000000]);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  TupleEventMarker__IEnumerator_1_EventMarker_ = (function (Item0, Item1)
  {
    this.Items = [Item0, Item1];
    this.Items = [Item0, Item1];
  });
  TupleEventMarker__IEnumerator_1_EventMarker_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = this.Items[0.000000].CompareTo(that.Items[0.000000]);
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Items[1.000000].CompareTo(that.Items[1.000000]);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  TupleEventMarker__IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_ = (function (Item0, Item1)
  {
    this.Items = [Item0, Item1];
    this.Items = [Item0, Item1];
  });
  TupleEventMarker__IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = this.Items[0.000000].CompareTo(that.Items[0.000000]);
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Items[1.000000].CompareTo(that.Items[1.000000]);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  TupleEventMarker__IEnumerator_1_calEvent_ = (function (Item0, Item1)
  {
    this.Items = [Item0, Item1];
    this.Items = [Item0, Item1];
  });
  TupleEventMarker__IEnumerator_1_calEvent_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = this.Items[0.000000].CompareTo(that.Items[0.000000]);
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Items[1.000000].CompareTo(that.Items[1.000000]);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  TupleEventMarker__Int32 = (function (Item0, Item1)
  {
    this.Items = [Item0, Item1];
    this.Items = [Item0, Item1];
  });
  TupleEventMarker__Int32.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = this.Items[0.000000].CompareTo(that.Items[0.000000]);
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = ((this.Items[1.000000] < that.Items[1.000000]) ? -1.000000 : ((this.Items[1.000000] == that.Items[1.000000]) ? 0.000000 : 1.000000));
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  TupleFSharpOption_1_EventMarker__FSharpSet_1_EventMarker_ = (function (Item0, Item1)
  {
    this.Items = [Item0, Item1];
    this.Items = [Item0, Item1];
  });
  TupleFSharpOption_1_EventMarker__FSharpSet_1_EventMarker_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = this.Items[0.000000].CompareTo(that.Items[0.000000]);
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Items[1.000000].CompareTo(that.Items[1.000000]);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  TupleInt32_FSharpList_1_Int32_ = (function (Item0, Item1)
  {
    this.Items = [Item0, Item1];
    this.Items = [Item0, Item1];
  });
  TupleInt32_FSharpList_1_Int32_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.Items[0.000000] < that.Items[0.000000]) ? -1.000000 : ((this.Items[0.000000] == that.Items[0.000000]) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Items[1.000000].CompareTo(that.Items[1.000000]);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  TupleInt32_Int32 = (function (Item0, Item1)
  {
    this.Items = [Item0, Item1];
    this.Items = [Item0, Item1];
  });
  TupleInt32_Int32.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.Items[0.000000] < that.Items[0.000000]) ? -1.000000 : ((this.Items[0.000000] == that.Items[0.000000]) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = ((this.Items[1.000000] < that.Items[1.000000]) ? -1.000000 : ((this.Items[1.000000] == that.Items[1.000000]) ? 0.000000 : 1.000000));
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  TupleResult__Int32 = (function (Item0, Item1)
  {
    this.Items = [Item0, Item1];
    this.Items = [Item0, Item1];
  });
  TupleResult__Int32.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = this.Items[0.000000].CompareTo(that.Items[0.000000]);
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = ((this.Items[1.000000] < that.Items[1.000000]) ? -1.000000 : ((this.Items[1.000000] == that.Items[1.000000]) ? 0.000000 : 1.000000));
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  TupleSetTree_1_EventMarker__SetTree_1_EventMarker_ = (function (Item0, Item1)
  {
    this.Items = [Item0, Item1];
    this.Items = [Item0, Item1];
  });
  TupleSetTree_1_EventMarker__SetTree_1_EventMarker_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = this.Items[0.000000].CompareTo(that.Items[0.000000]);
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Items[1.000000].CompareTo(that.Items[1.000000]);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  TupleString_String_String_String_String_String = (function (Item0, Item1, Item2, Item3, Item4, Item5)
  {
    this.Items = [Item0, Item1, Item2, Item3, Item4, Item5];
    this.Items = [Item0, Item1, Item2, Item3, Item4, Item5];
    this.Items = [Item0, Item1, Item2, Item3, Item4, Item5];
    this.Items = [Item0, Item1, Item2, Item3, Item4, Item5];
    this.Items = [Item0, Item1, Item2, Item3, Item4, Item5];
    this.Items = [Item0, Item1, Item2, Item3, Item4, Item5];
  });
  TupleString_String_String_String_String_String.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.Items[0.000000] < that.Items[0.000000]) ? -1.000000 : ((this.Items[0.000000] == that.Items[0.000000]) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = ((this.Items[1.000000] < that.Items[1.000000]) ? -1.000000 : ((this.Items[1.000000] == that.Items[1.000000]) ? 0.000000 : 1.000000));
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        var ___diff = 0.000000;
        ___diff = ((this.Items[2.000000] < that.Items[2.000000]) ? -1.000000 : ((this.Items[2.000000] == that.Items[2.000000]) ? 0.000000 : 1.000000));
        diff = ___diff;
        if ((diff != 0.000000)) 
        {
          return diff;
        }
        else
        {
          var ____diff = 0.000000;
          ____diff = ((this.Items[3.000000] < that.Items[3.000000]) ? -1.000000 : ((this.Items[3.000000] == that.Items[3.000000]) ? 0.000000 : 1.000000));
          diff = ____diff;
          if ((diff != 0.000000)) 
          {
            return diff;
          }
          else
          {
            var _____diff = 0.000000;
            _____diff = ((this.Items[4.000000] < that.Items[4.000000]) ? -1.000000 : ((this.Items[4.000000] == that.Items[4.000000]) ? 0.000000 : 1.000000));
            diff = _____diff;
            if ((diff != 0.000000)) 
            {
              return diff;
            }
            else
            {
              var ______diff = 0.000000;
              ______diff = ((this.Items[5.000000] < that.Items[5.000000]) ? -1.000000 : ((this.Items[5.000000] == that.Items[5.000000]) ? 0.000000 : 1.000000));
              diff = ______diff;
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
        };
      };
    };
  });
  TupleTuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_ = (function (Item0, Item1)
  {
    this.Items = [Item0, Item1];
    this.Items = [Item0, Item1];
  });
  TupleTuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = this.Items[0.000000].CompareTo(that.Items[0.000000]);
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Items[1.000000].CompareTo(that.Items[1.000000]);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  TuplecalEvent__IEnumerator_1_Int32_ = (function (Item0, Item1)
  {
    this.Items = [Item0, Item1];
    this.Items = [Item0, Item1];
  });
  TuplecalEvent__IEnumerator_1_Int32_.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = this.Items[0.000000].CompareTo(that.Items[0.000000]);
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Items[1.000000].CompareTo(that.Items[1.000000]);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  UnfoldEnumerator_2_FSharpList_1_Int32__Int32___ctor$FSharpList_1_Int32__Int32 = (function (seed, unfold)
  {
    this.seed = seed;
    this.unfold = unfold;
    this.acc = {Tag: 1.000000, Value: this.seed};
    this.current = null;
  });
  UnfoldEnumerator_2_FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker___ctor$FSharpOption_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker_ = (function (seed, unfold)
  {
    this.seed = seed;
    this.unfold = unfold;
    this.acc = {Tag: 1.000000, Value: this.seed};
    this.current = null;
  });
  UnfoldEnumerator_2_IEnumerator_1_EventMarker__Double___ctor$IEnumerator_1_EventMarker__Double = (function (seed, unfold)
  {
    this.seed = seed;
    this.unfold = unfold;
    this.acc = {Tag: 1.000000, Value: this.seed};
    this.current = null;
  });
  UnfoldEnumerator_2_IEnumerator_1_EventMarker__EventMarker___ctor$IEnumerator_1_EventMarker__EventMarker_ = (function (seed, unfold)
  {
    this.seed = seed;
    this.unfold = unfold;
    this.acc = {Tag: 1.000000, Value: this.seed};
    this.current = null;
  });
  UnfoldEnumerator_2_IEnumerator_1_Int32__calEvent___ctor$IEnumerator_1_Int32__calEvent_ = (function (seed, unfold)
  {
    this.seed = seed;
    this.unfold = unfold;
    this.acc = {Tag: 1.000000, Value: this.seed};
    this.current = null;
  });
  UnfoldEnumerator_2_IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__EventMarker___ctor$IEnumerator_1_Tuple_2_FSharpOption_1_EventMarker__FSharpSet_1_EventMarker__EventMarker_ = (function (seed, unfold)
  {
    this.seed = seed;
    this.unfold = unfold;
    this.acc = {Tag: 1.000000, Value: this.seed};
    this.current = null;
  });
  UnfoldEnumerator_2_IEnumerator_1_calEvent__EventMarker___ctor$IEnumerator_1_calEvent__EventMarker_ = (function (seed, unfold)
  {
    this.seed = seed;
    this.unfold = unfold;
    this.acc = {Tag: 1.000000, Value: this.seed};
    this.current = null;
  });
  UnfoldEnumerator_2_Int32__EventMarker___ctor$Int32_EventMarker_ = (function (seed, unfold)
  {
    this.seed = seed;
    this.unfold = unfold;
    this.acc = {Tag: 1.000000, Value: this.seed};
    this.current = null;
  });
  UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32 = (function (seed, unfold)
  {
    this.seed = seed;
    this.unfold = unfold;
    this.acc = {Tag: 1.000000, Value: this.seed};
    this.current = null;
  });
  UnfoldEnumerator_2_Int32__Result___ctor$Int32_Result_ = (function (seed, unfold)
  {
    this.seed = seed;
    this.unfold = unfold;
    this.acc = {Tag: 1.000000, Value: this.seed};
    this.current = null;
  });
  calEvent__Note = (function (Item)
  {
    this.Tag = 1.000000;
    this._CaseName = "Note";
    this.Item = Item;
  });
  calEvent__Note.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.Tag < that.Tag) ? -1.000000 : ((this.Tag == that.Tag) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Item.CompareTo(that.Item);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  calEvent__Vevent = (function (Item)
  {
    this.Tag = 0.000000;
    this._CaseName = "Vevent";
    this.Item = Item;
  });
  calEvent__Vevent.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.Tag < that.Tag) ? -1.000000 : ((this.Tag == that.Tag) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = this.Item.CompareTo(that.Item);
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        return 0.000000;
      };
    };
  });
  list_1_Int32__ConsInt32 = (function (Item1, Item2)
  {
    this.Tag = 1.000000;
    this._CaseName = "Cons";
    this.Item1 = Item1;
    this.Item2 = Item2;
  });
  list_1_Int32__ConsInt32.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.Tag < that.Tag) ? -1.000000 : ((this.Tag == that.Tag) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      var __diff = 0.000000;
      __diff = ((this.Item1 < that.Item1) ? -1.000000 : ((this.Item1 == that.Item1) ? 0.000000 : 1.000000));
      diff = __diff;
      if ((diff != 0.000000)) 
      {
        return diff;
      }
      else
      {
        var ___diff = 0.000000;
        ___diff = this.Item2.CompareTo(that.Item2);
        diff = ___diff;
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
  list_1_Int32__NilInt32 = (function ()
  {
    this.Tag = 0.000000;
    this._CaseName = "Nil";
  });
  list_1_Int32__NilInt32.prototype.CompareTo = (function (that)
  {
    var diff = 0.000000;
    var _diff = 0.000000;
    _diff = ((this.Tag < that.Tag) ? -1.000000 : ((this.Tag == that.Tag) ? 0.000000 : 1.000000));
    diff = _diff;
    if ((diff != 0.000000)) 
    {
      return diff;
    }
    else
    {
      return 0.000000;
    };
  });
  notification__Info$ = (function (x, unitVar1)
  {
    return ((x.title + ", ") + x.details);
  });
  notification___ctor$ = (function (id, title, details)
  {
    this.id = id;
    this.title = title;
    this.details = details;
  });
  notification__get_Details$ = (function (x, unitVar1)
  {
    return x.details;
  });
  notification__get_Id$ = (function (x, unitVar1)
  {
    return x.id;
  });
  notification__get_Title$ = (function (x, unitVar1)
  {
    return x.title;
  });
  vevent__Summary$ = (function (x, unitVar1)
  {
    var _1954;
    if ((String__Length$(vevent__get_LocationDetails$(x)) > 0)) 
    {
      _1954 = (vevent__get_LocationDetails$(x) + ", \r\n");
    }
    else
    {
      _1954 = "";
    };
    var locdet = _1954;
    return (((((((EventItem__jsDateFormatToUser$(vevent__get_StarTime$(x)) + " \r\n") + vevent__get_Title$(x)) + " (") + vevent__get_City$(x)) + ")\r\n") + locdet) + vevent__get_Details$(x));
  });
  vevent___ctor$ = (function (id, title, starttime, city, streetAddress, locationdetails, details, latlon)
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
  vevent__get_City$ = (function (x, unitVar1)
  {
    return x.city;
  });
  vevent__get_Details$ = (function (x, unitVar1)
  {
    return x.details;
  });
  vevent__get_DurationHours$ = (function (x, unitVar1)
  {
    return 1.000000;
  });
  vevent__get_Id$ = (function (x, unitVar1)
  {
    return x.id;
  });
  vevent__get_LatLon$ = (function (__, unitVar1)
  {
    return __.LatLon_;
  });
  vevent__get_LocationDetails$ = (function (x, unitVar1)
  {
    return x.locationdetails;
  });
  vevent__get_StarTime$ = (function (x, unitVar1)
  {
    return x.starttime;
  });
  vevent__get_StreetAddress$ = (function (x, unitVar1)
  {
    return x.streetAddress;
  });
  vevent__get_Title$ = (function (x, unitVar1)
  {
    return x.title;
  });
  vevent__iCal$ = (function (x, unitVar1)
  {
    return (((((((((((((((("BEGIN:VEVENT\r\nUID: " + vevent__get_Id$(x)) + "@test.com\r\nSUMMARY:") + vevent__get_Title$(x)) + "\r\nTZID:EET-1276\r\nDTSTART:") + EventItem__jsDateFormatToJson$(vevent__get_StarTime$(x), 0.000000)) + "\r\nDTEND:") + EventItem__jsDateFormatToJson$(vevent__get_StarTime$(x), vevent__get_DurationHours$(x))) + "\r\nLOCATION:") + vevent__get_StreetAddress$(x)) + ", ") + vevent__get_City$(x)) + "\r\nDESCRIPTION:") + vevent__get_LocationDetails$(x)) + ", ") + vevent__get_Details$(x)) + "\r\nEND:VEVENT");
  });
  EventItem__items = EventItem__get_items$();
  SetTreeModule__tolerance = SetTreeModule__get_tolerance$();
  return Page__main$()
});