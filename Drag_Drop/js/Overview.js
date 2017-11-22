RBVH.Stada.javascript.common.NamespaceManager.register("RBVH.Stada.WebPages.pages");

RBVH.Stada.WebPages.pages.Overview = function (settings) {
    this.Protocol = window.location.protocol;
    this.Settings = {
        ServiceUrls:
        {
            GetEmployeeInDepartment: '//{0}/_vti_bin/Services/Employee/EmployeeService.svc/GetEmployeeListInCurrentDepartment/{1}',
            InsertBusinessTripRequest: '//{0}/_vti_bin/Services/BusinessTripManagement/BusinessTripManagementService.svc/InsertBusinessTripManagement',
            GetBusinessTripRequestById: '//{0}/_vti_bin/Services/BusinessTripManagement/BusinessTripManagementService.svc/GetBusinessTripManagementById/{1}',
            GetApprovers: '//{0}/_vti_bin/Services/BusinessTripManagement/BusinessTripManagementService.svc/GetApprovers/{1}',
            ApproveBusinessTripRequest: '//{0}/_vti_bin/Services/BusinessTripManagement/BusinessTripManagementService.svc/ApproveBusinessTrip',
            DriverCommentBusinessTrip: '//{0}/_vti_bin/Services/BusinessTripManagement/BusinessTripManagementService.svc/DriverUpdateBusinessTrip',
            CashierCommentBusinessTrip: '//{0}/_vti_bin/Services/BusinessTripManagement/BusinessTripManagementService.svc/CashierUpdateBusinessTrip',
            RejectBusinessTripRequest: '//{0}/_vti_bin/Services/BusinessTripManagement/BusinessTripManagementService.svc/RejectBusinessTrip',
            GetApprovalPermission: '//{0}/_vti_bin/Services/BusinessTripManagement/BusinessTripManagementService.svc/HasApprovalPermission/{1}',
            GetDelegatedTaskInfo: '//{0}/_vti_bin/Services/BusinessTripManagement/BusinessTripManagementService.svc/GetDelegatedTaskInfo/{1}'
        },
        Locations: [
            { Name: "", Id: 0 },
            { Name: "NM1", Id: 1 },
            { Name: "NM2", Id: 2 },
        ],
        Departments: [
            { Name: "", Id: 0 },
            { Name: "Quality Control", Id: 1 },
        ],
        ShiftTimes: [
            { Name: "", Id: 0 },
            { Name: "HC", Id: 1 },
            { Name: "Ca 1", Id: 2 },
            { Name: "Ca 2", Id: 3 },
            { Name: "Ca 3", Id: 4 },
        ],


        /* Shift Module */
        DumpData:
        {
            Shift: [
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "Month": 10,
                    "Year": 2017
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "Month": 10,
                    "Year": 2017
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "Month": 10,
                    "Year": 2017
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "Month": 10,
                    "Year": 2017
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "Month": 10,
                    "Year": 2017
                },
            ],

            Overtime: [
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "Time": "25/11/2017"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "Time": "26/11/2017"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "Time": "27/11/2017"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "Time": "28/11/2017"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "Time": "29/11/2017"
                },
            ],

            ChangeShift: [
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromShift": 1,
                    "ToShift": 2,
                    "FromDate": "25/11/2017",
                    "ToDate": "25/11/2017"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromShift": 1,
                    "ToShift": 2,
                    "FromDate": "26/11/2017",
                    "ToDate": "26/11/2017"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromShift": 1,
                    "ToShift": 2,
                    "FromDate": "27/11/2017",
                    "ToDate": "27/11/2017"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromShift": 1,
                    "ToShift": 2,
                    "FromDate": "28/11/2017",
                    "ToDate": "28/11/2017"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromShift": 1,
                    "ToShift": 2,
                    "FromDate": "29/11/2017",
                    "ToDate": "29/11/2017"
                },
            ],

            NotOvertime: [
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "25/11/2017 0:00",
                    "ToDate": "25/11/2017 9:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "26/11/2017 1:00",
                    "ToDate": "26/11/2017 8:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "27/11/2017 0:00",
                    "ToDate": "27/11/2017 9:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "28/11/2017 0:00",
                    "ToDate": "28/11/2017 9:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "29/11/2017 0:00",
                    "ToDate": "29/11/2017 9:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "25/11/2017 0:00",
                    "ToDate": "25/11/2017 9:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "26/11/2017 1:00",
                    "ToDate": "26/11/2017 8:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "27/11/2017 0:00",
                    "ToDate": "27/11/2017 9:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "28/11/2017 0:00",
                    "ToDate": "28/11/2017 9:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "29/11/2017 0:00",
                    "ToDate": "29/11/2017 9:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "25/11/2017 0:00",
                    "ToDate": "25/11/2017 9:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "26/11/2017 1:00",
                    "ToDate": "26/11/2017 8:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "27/11/2017 0:00",
                    "ToDate": "27/11/2017 9:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "28/11/2017 0:00",
                    "ToDate": "28/11/2017 9:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "29/11/2017 0:00",
                    "ToDate": "29/11/2017 9:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "25/11/2017 0:00",
                    "ToDate": "25/11/2017 9:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "26/11/2017 1:00",
                    "ToDate": "26/11/2017 8:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "27/11/2017 0:00",
                    "ToDate": "27/11/2017 9:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "28/11/2017 0:00",
                    "ToDate": "28/11/2017 9:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "29/11/2017 0:00",
                    "ToDate": "29/11/2017 9:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "25/11/2017 0:00",
                    "ToDate": "25/11/2017 9:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "26/11/2017 1:00",
                    "ToDate": "26/11/2017 8:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "27/11/2017 0:00",
                    "ToDate": "27/11/2017 9:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "28/11/2017 0:00",
                    "ToDate": "28/11/2017 9:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "29/11/2017 0:00",
                    "ToDate": "29/11/2017 9:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "25/11/2017 0:00",
                    "ToDate": "25/11/2017 9:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "26/11/2017 1:00",
                    "ToDate": "26/11/2017 8:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "27/11/2017 0:00",
                    "ToDate": "27/11/2017 9:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "28/11/2017 0:00",
                    "ToDate": "28/11/2017 9:00"
                },
                {
                    "Title": "#",
                    "Requester": "Võ Thị Hồng Nhớ",
                    "Department": 1,
                    "Location": 1,
                    "FromDate": "29/11/2017 0:00",
                    "ToDate": "29/11/2017 9:00"
                },
            ],
        }
    },

    $.extend(true, this.Settings, settings);

    this.Initialize();
};

RBVH.Stada.WebPages.pages.Overview.prototype =
{
    Initialize: function () {
        var that = this;

        $(document).ready(function () {
            that.InitDragAndDrop();
            that.BindData();
            setTimeout(function () {
                that.SetDefaultValue();
            }, 1000);
        });
    },

    InitDragAndDrop: function () {
        $('.dragbox')
	    .each(function () {
	        $(this)
		    .find('h2 > span.show-hide')
            .click(function (e) {
                e.stopPropagation();
                $(this).parent().siblings('.dragbox-content').toggle();
                if ($(this).hasClass('s-expand')) {
                    $(this).removeClass('s-expand');
                    $(this).addClass('s-collapse');
                }
                else {
                    $(this).removeClass('s-collapse');
                    $(this).addClass('s-expand');
                }
            })
		    .end()
		    //.find('.configure').css('visibility', 'hidden');
	    });

        $('.column').sortable({
            connectWith: '.column',
            handle: 'h2',
            cursor: 'move',
            placeholder: 'placeholder',
            forcePlaceholderSize: true,
            opacity: 0.4,
            stop: function (event, ui) {
                $(ui.item).find('h2').click();
                var sortorder = '';
                $('.column').each(function () {
                    var itemorder = $(this).sortable('toArray');
                    var columnId = $(this).attr('id');
                    sortorder += columnId + '=' + itemorder.toString() + '&';
                });
                //alert('SortOrder: ' + sortorder);
                /*Pass sortorder variable to server using ajax to save state*/
            }
        }).disableSelection();
    },

    BindData: function () {
        var that = this;

        $("#jsGrid-leave, #jsGrid-vehicle, #jsGrid-requests, #jsGrid-recruitment, #jsGrid-business-trip, #jsGrid-certificate, #jsGrid-freight").jsGrid({
            height: "100%",
            width: "100%",

            filtering: true,
            sorting: true,
            paging: true,
            autoload: true,

            pageSize: 15,
            pageButtonCount: 5,

            controller: db,

            fields: [
                { name: "Name", type: "text", width: 150 },
                { name: "Age", type: "number", width: 50 },
                { name: "Address", type: "text", width: 200 },
                { name: "Country", type: "select", items: db.countries, valueField: "Id", textField: "Name" },
                { name: "Married", type: "checkbox", title: "Is Married", sorting: false },
                { type: "control", modeSwitchButton: false, editButton: false, deleteButton: false }
            ]
        });

        $("#jsGrid-shift").jsGrid({
            height: "100%",
            width: "100%",

            filtering: true,
            sorting: true,
            paging: true,
            autoload: true,

            pageSize: 10,
            pageButtonCount: 5,

            controller: {
                loadData: function (filter) {
                    //var d = $.Deferred();
                    return $.grep(that.Settings.DumpData.Shift, function (client) {
                        return (!filter.Requester || client.Requester.indexOf(filter.Requester) > -1)
                            && (!filter.Department || client.Department === filter.Department)
                            && (!filter.Location || client.Location === filter.Location)
                            && (!filter.Month || client.Month === filter.Month)
                            && (!filter.Year || client.Year === filter.Year);
                    });
                    //d.resolve(that.Settings.DumpData.Shift);

                    //return d.promise();
                },
            },

            fields: [
                {
                    name: "Title", type: "text", width: 70, filtering: false, align: "center", title: "Details",
                    itemTemplate: function (value, item) {
                        var $link = $("<a>").attr("href", value);
                        var $eye = $("<i>").attr("class", "fa fa-eye");
                        $link.append($eye);
                        return $("<div>").append($link);
                    }
                },
                { name: "Requester", type: "number", width: 150, align: "left" },
                { name: "Department", type: "select", width: 150, items: that.Settings.Departments, valueField: "Id", textField: "Name", align: "center" },
                { name: "Location", type: "select", width: 80, items: that.Settings.Locations, valueField: "Id", textField: "Name", align: "center" },
                { name: "Month", type: "number", width: 50, align: "center" },
                { name: "Year", type: "number", width: 50, align: "center" },
                { type: "control", modeSwitchButton: false, editButton: false, deleteButton: false }
            ]
        });

        $("#jsGrid-overtime").jsGrid({
            height: "100%",
            width: "100%",

            filtering: true,
            sorting: true,
            paging: true,
            autoload: true,

            pageSize: 10,
            pageButtonCount: 5,

            controller: {
                loadData: function (filter) {
                    //var d = $.Deferred();
                    return $.grep(that.Settings.DumpData.Overtime, function (client) {
                        return (!filter.Requester || client.Requester.indexOf(filter.Requester) > -1)
                            && (!filter.Department || client.Department === filter.Department)
                            && (!filter.Location || client.Location === filter.Location)
                            && (!filter.Time || client.Time.indexOf(filter.Time) > -1);
                    });
                    //d.resolve(that.Settings.DumpData.Shift);

                    //return d.promise();
                },
            },

            fields: [
                {
                    name: "Title", type: "text", width: 70, filtering: false, align: "center", title: "Details",
                    itemTemplate: function (value, item) {
                        var $link = $("<a>").attr("href", value);
                        var $eye = $("<i>").attr("class", "fa fa-eye");
                        $link.append($eye);
                        return $("<div>").append($link);
                    }
                },
                { name: "Requester", type: "number", width: 150, align: "left" },
                { name: "Department", type: "select", width: 150, items: that.Settings.Departments, valueField: "Id", textField: "Name", align: "center" },
                { name: "Location", type: "select", width: 80, items: that.Settings.Locations, valueField: "Id", textField: "Name", align: "center" },
                { name: "Time", type: "text", width: 80, align: "center" },
                { type: "control", modeSwitchButton: false, editButton: false, deleteButton: false }
            ]
        });

        $("#jsGrid-change-shift").jsGrid({
            height: "100%",
            width: "100%",

            filtering: true,
            sorting: true,
            paging: true,
            autoload: true,

            pageSize: 10,
            pageButtonCount: 5,

            controller: {
                loadData: function (filter) {
                    //var d = $.Deferred();
                    return $.grep(that.Settings.DumpData.ChangeShift, function (client) {
                        return (!filter.Requester || client.Requester.indexOf(filter.Requester) > -1)
                            && (!filter.Department || client.Department === filter.Department)
                            && (!filter.Location || client.Location === filter.Location)
                            && (!filter.FromShift || client.FromShift === filter.FromShift)
                            && (!filter.ToShift || client.ToShift === filter.ToShift)
                            && (!filter.FromDate || client.FromDate.indexOf(filter.FromDate) > -1)
                            && (!filter.ToDate || client.ToDate.indexOf(filter.ToDate) > -1);
                        ;
                    });
                    //d.resolve(that.Settings.DumpData.Shift);

                    //return d.promise();
                },
            },

            fields: [
                {
                    name: "Title", type: "text", width: 70, filtering: false, align: "center", title: "Details",
                    itemTemplate: function (value, item) {
                        var $link = $("<a>").attr("href", value);
                        var $eye = $("<i>").attr("class", "fa fa-eye");
                        $link.append($eye);
                        return $("<div>").append($link);
                    }
                },
                { name: "Requester", type: "number", width: 150, align: "left" },
                { name: "Department", type: "select", width: 150, items: that.Settings.Departments, valueField: "Id", textField: "Name", align: "center" },
                { name: "Location", type: "select", width: 80, items: that.Settings.Locations, valueField: "Id", textField: "Name", align: "center" },
                { name: "FromShift", type: "select", width: 80, items: that.Settings.ShiftTimes, valueField: "Id", textField: "Name", align: "center" },
                { name: "ToShift", type: "select", width: 80, items: that.Settings.ShiftTimes, valueField: "Id", textField: "Name", align: "center" },
                { name: "FromDate", type: "text", width: 80, align: "center" },
                { name: "ToDate", type: "text", width: 80, align: "center" },
                { type: "control", modeSwitchButton: false, editButton: false, deleteButton: false }
            ]
        });

        $("#jsGrid-not-overtime").jsGrid({
            height: "100%",
            width: "100%",

            filtering: true,
            sorting: true,
            paging: true,
            autoload: true,

            pageSize: 10,
            pageButtonCount: 5,

            controller: {
                loadData: function (filter) {
                    //var d = $.Deferred();
                    return $.grep(that.Settings.DumpData.NotOvertime, function (client) {
                        return (!filter.Requester || client.Requester.indexOf(filter.Requester) > -1)
                            && (!filter.Department || client.Department === filter.Department)
                            && (!filter.Location || client.Location === filter.Location)
                            && (!filter.FromDate || client.FromDate.indexOf(filter.FromDate) > -1)
                            && (!filter.ToDate || client.ToDate.indexOf(filter.ToDate) > -1);
                    });
                    //d.resolve(that.Settings.DumpData.Shift);

                    //return d.promise();
                },
            },

            fields: [
                {
                    name: "Title", type: "text", width: 70, filtering: false, align: "center", title: "Details",
                    itemTemplate: function (value, item) {
                        var $link = $("<a>").attr("href", value);
                        var $eye = $("<i>").attr("class", "fa fa-eye");
                        $link.append($eye);
                        return $("<div>").append($link);
                    }
                },
                { name: "Requester", type: "number", width: 150, align: "left" },
                { name: "Department", type: "select", width: 150, items: that.Settings.Departments, valueField: "Id", textField: "Name", align: "center" },
                { name: "Location", type: "select", width: 80, items: that.Settings.Locations, valueField: "Id", textField: "Name", align: "center" },
                { name: "FromDate", type: "text", width: 100, align: "center" },
                { name: "ToDate", type: "text", width: 100, align: "center" },
                { type: "control", modeSwitchButton: false, editButton: false, deleteButton: false }
            ]
        });
    },

    SetDefaultValue: function () {
        $('.dragbox').find('h2 > span').click();
    }
};


(function () {

    var db = {

        loadData: function (filter) {
            return $.grep(this.clients, function (client) {
                return (!filter.Name || client.Name.indexOf(filter.Name) > -1)
                    && (!filter.Age || client.Age === filter.Age)
                    && (!filter.Address || client.Address.indexOf(filter.Address) > -1)
                    && (!filter.Country || client.Country === filter.Country)
                    && (filter.Married === undefined || client.Married === filter.Married);
            });
        },

    };

    window.db = db;


    db.countries = [
        { Name: "", Id: 0 },
        { Name: "United States", Id: 1 },
        { Name: "Canada", Id: 2 },
        { Name: "United Kingdom", Id: 3 },
        { Name: "France", Id: 4 },
        { Name: "Brazil", Id: 5 },
        { Name: "China", Id: 6 },
        { Name: "Russia", Id: 7 }
    ];

    db.clients = [
        {
            "Name": "Otto Clay",
            "Age": 61,
            "Country": 6,
            "Address": "Ap #897-1459 Quam Avenue",
            "Married": false
        },
        {
            "Name": "Connor Johnston",
            "Age": 73,
            "Country": 7,
            "Address": "Ap #370-4647 Dis Av.",
            "Married": false
        },
        {
            "Name": "Lacey Hess",
            "Age": 29,
            "Country": 7,
            "Address": "Ap #365-8835 Integer St.",
            "Married": false
        },
        {
            "Name": "Timothy Henson",
            "Age": 78,
            "Country": 1,
            "Address": "911-5143 Luctus Ave",
            "Married": false
        },
        {
            "Name": "Ramona Benton",
            "Age": 43,
            "Country": 5,
            "Address": "Ap #614-689 Vehicula Street",
            "Married": true
        },
        {
            "Name": "Ezra Tillman",
            "Age": 51,
            "Country": 1,
            "Address": "P.O. Box 738, 7583 Quisque St.",
            "Married": true
        },
        {
            "Name": "Dante Carter",
            "Age": 59,
            "Country": 1,
            "Address": "P.O. Box 976, 6316 Lorem, St.",
            "Married": false
        },
        {
            "Name": "Christopher Mcclure",
            "Age": 58,
            "Country": 1,
            "Address": "847-4303 Dictum Av.",
            "Married": true
        },
        {
            "Name": "Ruby Rocha",
            "Age": 62,
            "Country": 2,
            "Address": "5212 Sagittis Ave",
            "Married": false
        },
        {
            "Name": "Imelda Hardin",
            "Age": 39,
            "Country": 5,
            "Address": "719-7009 Auctor Av.",
            "Married": false
        },
        {
            "Name": "Jonah Johns",
            "Age": 28,
            "Country": 5,
            "Address": "P.O. Box 939, 9310 A Ave",
            "Married": false
        },
        {
            "Name": "Herman Rosa",
            "Age": 49,
            "Country": 7,
            "Address": "718-7162 Molestie Av.",
            "Married": true
        },
        {
            "Name": "Arthur Gay",
            "Age": 20,
            "Country": 7,
            "Address": "5497 Neque Street",
            "Married": false
        },
        {
            "Name": "Xena Wilkerson",
            "Age": 63,
            "Country": 1,
            "Address": "Ap #303-6974 Proin Street",
            "Married": true
        },
        {
            "Name": "Lilah Atkins",
            "Age": 33,
            "Country": 5,
            "Address": "622-8602 Gravida Ave",
            "Married": true
        },
        {
            "Name": "Malik Shepard",
            "Age": 59,
            "Country": 1,
            "Address": "967-5176 Tincidunt Av.",
            "Married": false
        },
        {
            "Name": "Keely Silva",
            "Age": 24,
            "Country": 1,
            "Address": "P.O. Box 153, 8995 Praesent Ave",
            "Married": false
        },
        {
            "Name": "Hunter Pate",
            "Age": 73,
            "Country": 7,
            "Address": "P.O. Box 771, 7599 Ante, Road",
            "Married": false
        },
        {
            "Name": "Mikayla Roach",
            "Age": 55,
            "Country": 5,
            "Address": "Ap #438-9886 Donec Rd.",
            "Married": true
        },
        {
            "Name": "Upton Joseph",
            "Age": 48,
            "Country": 4,
            "Address": "Ap #896-7592 Habitant St.",
            "Married": true
        },
        {
            "Name": "Jeanette Pate",
            "Age": 59,
            "Country": 2,
            "Address": "P.O. Box 177, 7584 Amet, St.",
            "Married": false
        },
        {
            "Name": "Kaden Hernandez",
            "Age": 79,
            "Country": 3,
            "Address": "366 Ut St.",
            "Married": true
        },
        {
            "Name": "Kenyon Stevens",
            "Age": 20,
            "Country": 3,
            "Address": "P.O. Box 704, 4580 Gravida Rd.",
            "Married": false
        },
        {
            "Name": "Jerome Harper",
            "Age": 31,
            "Country": 5,
            "Address": "2464 Porttitor Road",
            "Married": false
        },
        {
            "Name": "Jelani Patel",
            "Age": 36,
            "Country": 2,
            "Address": "P.O. Box 541, 5805 Nec Av.",
            "Married": true
        },
        {
            "Name": "Keaton Oconnor",
            "Age": 21,
            "Country": 1,
            "Address": "Ap #657-1093 Nec, Street",
            "Married": false
        },
        {
            "Name": "Bree Johnston",
            "Age": 31,
            "Country": 2,
            "Address": "372-5942 Vulputate Avenue",
            "Married": false
        },
        {
            "Name": "Maisie Hodges",
            "Age": 70,
            "Country": 7,
            "Address": "P.O. Box 445, 3880 Odio, Rd.",
            "Married": false
        },
        {
            "Name": "Kuame Calhoun",
            "Age": 39,
            "Country": 2,
            "Address": "P.O. Box 609, 4105 Rutrum St.",
            "Married": true
        },
        {
            "Name": "Carlos Cameron",
            "Age": 38,
            "Country": 5,
            "Address": "Ap #215-5386 A, Avenue",
            "Married": false
        },
        {
            "Name": "Fulton Parsons",
            "Age": 25,
            "Country": 7,
            "Address": "P.O. Box 523, 3705 Sed Rd.",
            "Married": false
        },
        {
            "Name": "Wallace Christian",
            "Age": 43,
            "Country": 3,
            "Address": "416-8816 Mauris Avenue",
            "Married": true
        },
        {
            "Name": "Caryn Maldonado",
            "Age": 40,
            "Country": 1,
            "Address": "108-282 Nonummy Ave",
            "Married": false
        },
        {
            "Name": "Whilemina Frank",
            "Age": 20,
            "Country": 7,
            "Address": "P.O. Box 681, 3938 Egestas. Av.",
            "Married": true
        },
        {
            "Name": "Emery Moon",
            "Age": 41,
            "Country": 4,
            "Address": "Ap #717-8556 Non Road",
            "Married": true
        },
        {
            "Name": "Price Watkins",
            "Age": 35,
            "Country": 4,
            "Address": "832-7810 Nunc Rd.",
            "Married": false
        },
        {
            "Name": "Lydia Castillo",
            "Age": 59,
            "Country": 7,
            "Address": "5280 Placerat, Ave",
            "Married": true
        },
        {
            "Name": "Lawrence Conway",
            "Age": 53,
            "Country": 1,
            "Address": "Ap #452-2808 Imperdiet St.",
            "Married": false
        },
        {
            "Name": "Kalia Nicholson",
            "Age": 67,
            "Country": 5,
            "Address": "P.O. Box 871, 3023 Tellus Road",
            "Married": true
        },
        {
            "Name": "Brielle Baxter",
            "Age": 45,
            "Country": 3,
            "Address": "Ap #822-9526 Ut, Road",
            "Married": true
        },
        {
            "Name": "Valentine Brady",
            "Age": 72,
            "Country": 7,
            "Address": "8014 Enim. Road",
            "Married": true
        },
        {
            "Name": "Rebecca Gardner",
            "Age": 57,
            "Country": 4,
            "Address": "8655 Arcu. Road",
            "Married": true
        },
        {
            "Name": "Vladimir Tate",
            "Age": 26,
            "Country": 1,
            "Address": "130-1291 Non, Rd.",
            "Married": true
        },
        {
            "Name": "Vernon Hays",
            "Age": 56,
            "Country": 4,
            "Address": "964-5552 In Rd.",
            "Married": true
        },
        {
            "Name": "Allegra Hull",
            "Age": 22,
            "Country": 4,
            "Address": "245-8891 Donec St.",
            "Married": true
        },
        {
            "Name": "Hu Hendrix",
            "Age": 65,
            "Country": 7,
            "Address": "428-5404 Tempus Ave",
            "Married": true
        },
        {
            "Name": "Kenyon Battle",
            "Age": 32,
            "Country": 2,
            "Address": "921-6804 Lectus St.",
            "Married": false
        },
        {
            "Name": "Gloria Nielsen",
            "Age": 24,
            "Country": 4,
            "Address": "Ap #275-4345 Lorem, Street",
            "Married": true
        },
        {
            "Name": "Illiana Kidd",
            "Age": 59,
            "Country": 2,
            "Address": "7618 Lacus. Av.",
            "Married": false
        },
        {
            "Name": "Adria Todd",
            "Age": 68,
            "Country": 6,
            "Address": "1889 Tincidunt Road",
            "Married": false
        },
        {
            "Name": "Kirsten Mayo",
            "Age": 71,
            "Country": 1,
            "Address": "100-8640 Orci, Avenue",
            "Married": false
        },
        {
            "Name": "Willa Hobbs",
            "Age": 60,
            "Country": 6,
            "Address": "P.O. Box 323, 158 Tristique St.",
            "Married": false
        },
        {
            "Name": "Alexis Clements",
            "Age": 69,
            "Country": 5,
            "Address": "P.O. Box 176, 5107 Proin Rd.",
            "Married": false
        },
        {
            "Name": "Akeem Conrad",
            "Age": 60,
            "Country": 2,
            "Address": "282-495 Sed Ave",
            "Married": true
        },
        {
            "Name": "Montana Silva",
            "Age": 79,
            "Country": 6,
            "Address": "P.O. Box 120, 9766 Consectetuer St.",
            "Married": false
        },
        {
            "Name": "Kaseem Hensley",
            "Age": 77,
            "Country": 6,
            "Address": "Ap #510-8903 Mauris. Av.",
            "Married": true
        },
        {
            "Name": "Christopher Morton",
            "Age": 35,
            "Country": 5,
            "Address": "P.O. Box 234, 3651 Sodales Avenue",
            "Married": false
        },
        {
            "Name": "Wade Fernandez",
            "Age": 49,
            "Country": 6,
            "Address": "740-5059 Dolor. Road",
            "Married": true
        },
        {
            "Name": "Illiana Kirby",
            "Age": 31,
            "Country": 2,
            "Address": "527-3553 Mi Ave",
            "Married": false
        },
        {
            "Name": "Kimberley Hurley",
            "Age": 65,
            "Country": 5,
            "Address": "P.O. Box 637, 9915 Dictum St.",
            "Married": false
        },
        {
            "Name": "Arthur Olsen",
            "Age": 74,
            "Country": 5,
            "Address": "887-5080 Eget St.",
            "Married": false
        },
        {
            "Name": "Brody Potts",
            "Age": 59,
            "Country": 2,
            "Address": "Ap #577-7690 Sem Road",
            "Married": false
        },
        {
            "Name": "Dillon Ford",
            "Age": 60,
            "Country": 1,
            "Address": "Ap #885-9289 A, Av.",
            "Married": true
        },
        {
            "Name": "Hannah Juarez",
            "Age": 61,
            "Country": 2,
            "Address": "4744 Sapien, Rd.",
            "Married": true
        },
        {
            "Name": "Vincent Shaffer",
            "Age": 25,
            "Country": 2,
            "Address": "9203 Nunc St.",
            "Married": true
        },
        {
            "Name": "George Holt",
            "Age": 27,
            "Country": 6,
            "Address": "4162 Cras Rd.",
            "Married": false
        },
        {
            "Name": "Tobias Bartlett",
            "Age": 74,
            "Country": 4,
            "Address": "792-6145 Mauris St.",
            "Married": true
        },
        {
            "Name": "Xavier Hooper",
            "Age": 35,
            "Country": 1,
            "Address": "879-5026 Interdum. Rd.",
            "Married": false
        },
        {
            "Name": "Declan Dorsey",
            "Age": 31,
            "Country": 2,
            "Address": "Ap #926-4171 Aenean Road",
            "Married": true
        },
        {
            "Name": "Clementine Tran",
            "Age": 43,
            "Country": 4,
            "Address": "P.O. Box 176, 9865 Eu Rd.",
            "Married": true
        },
        {
            "Name": "Pamela Moody",
            "Age": 55,
            "Country": 6,
            "Address": "622-6233 Luctus Rd.",
            "Married": true
        },
        {
            "Name": "Julie Leon",
            "Age": 43,
            "Country": 6,
            "Address": "Ap #915-6782 Sem Av.",
            "Married": true
        },
        {
            "Name": "Shana Nolan",
            "Age": 79,
            "Country": 5,
            "Address": "P.O. Box 603, 899 Eu St.",
            "Married": false
        },
        {
            "Name": "Vaughan Moody",
            "Age": 37,
            "Country": 5,
            "Address": "880 Erat Rd.",
            "Married": false
        },
        {
            "Name": "Randall Reeves",
            "Age": 44,
            "Country": 3,
            "Address": "1819 Non Street",
            "Married": false
        },
        {
            "Name": "Dominic Raymond",
            "Age": 68,
            "Country": 1,
            "Address": "Ap #689-4874 Nisi Rd.",
            "Married": true
        },
        {
            "Name": "Lev Pugh",
            "Age": 69,
            "Country": 5,
            "Address": "Ap #433-6844 Auctor Avenue",
            "Married": true
        },
        {
            "Name": "Desiree Hughes",
            "Age": 80,
            "Country": 4,
            "Address": "605-6645 Fermentum Avenue",
            "Married": true
        },
        {
            "Name": "Idona Oneill",
            "Age": 23,
            "Country": 7,
            "Address": "751-8148 Aliquam Avenue",
            "Married": true
        },
        {
            "Name": "Lani Mayo",
            "Age": 76,
            "Country": 1,
            "Address": "635-2704 Tristique St.",
            "Married": true
        },
        {
            "Name": "Cathleen Bonner",
            "Age": 40,
            "Country": 1,
            "Address": "916-2910 Dolor Av.",
            "Married": false
        },
        {
            "Name": "Sydney Murray",
            "Age": 44,
            "Country": 5,
            "Address": "835-2330 Fringilla St.",
            "Married": false
        },
        {
            "Name": "Brenna Rodriguez",
            "Age": 77,
            "Country": 6,
            "Address": "3687 Imperdiet Av.",
            "Married": true
        },
        {
            "Name": "Alfreda Mcdaniel",
            "Age": 38,
            "Country": 7,
            "Address": "745-8221 Aliquet Rd.",
            "Married": true
        },
        {
            "Name": "Zachery Atkins",
            "Age": 30,
            "Country": 1,
            "Address": "549-2208 Auctor. Road",
            "Married": true
        },
        {
            "Name": "Amelia Rich",
            "Age": 56,
            "Country": 4,
            "Address": "P.O. Box 734, 4717 Nunc Rd.",
            "Married": false
        },
        {
            "Name": "Kiayada Witt",
            "Age": 62,
            "Country": 3,
            "Address": "Ap #735-3421 Malesuada Avenue",
            "Married": false
        },
        {
            "Name": "Lysandra Pierce",
            "Age": 36,
            "Country": 1,
            "Address": "Ap #146-2835 Curabitur St.",
            "Married": true
        },
        {
            "Name": "Cara Rios",
            "Age": 58,
            "Country": 4,
            "Address": "Ap #562-7811 Quam. Ave",
            "Married": true
        },
        {
            "Name": "Austin Andrews",
            "Age": 55,
            "Country": 7,
            "Address": "P.O. Box 274, 5505 Sociis Rd.",
            "Married": false
        },
        {
            "Name": "Lillian Peterson",
            "Age": 39,
            "Country": 2,
            "Address": "6212 A Avenue",
            "Married": false
        },
        {
            "Name": "Adria Beach",
            "Age": 29,
            "Country": 2,
            "Address": "P.O. Box 183, 2717 Nunc Avenue",
            "Married": true
        },
        {
            "Name": "Oleg Durham",
            "Age": 80,
            "Country": 4,
            "Address": "931-3208 Nunc Rd.",
            "Married": false
        },
        {
            "Name": "Casey Reese",
            "Age": 60,
            "Country": 4,
            "Address": "383-3675 Ultrices, St.",
            "Married": false
        },
        {
            "Name": "Kane Burnett",
            "Age": 80,
            "Country": 1,
            "Address": "759-8212 Dolor. Ave",
            "Married": false
        },
        {
            "Name": "Stewart Wilson",
            "Age": 46,
            "Country": 7,
            "Address": "718-7845 Sagittis. Av.",
            "Married": false
        },
        {
            "Name": "Charity Holcomb",
            "Age": 31,
            "Country": 6,
            "Address": "641-7892 Enim. Ave",
            "Married": false
        },
        {
            "Name": "Kyra Cummings",
            "Age": 43,
            "Country": 4,
            "Address": "P.O. Box 702, 6621 Mus. Av.",
            "Married": false
        },
        {
            "Name": "Stuart Wallace",
            "Age": 25,
            "Country": 7,
            "Address": "648-4990 Sed Rd.",
            "Married": true
        },
        {
            "Name": "Carter Clarke",
            "Age": 59,
            "Country": 6,
            "Address": "Ap #547-2921 A Street",
            "Married": false
        }
    ];

    db.users = [
        {
            "ID": "x",
            "Account": "A758A693-0302-03D1-AE53-EEFE22855556",
            "Name": "Carson Kelley",
            "RegisterDate": "2002-04-20T22:55:52-07:00"
        },
        {
            "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
            "Name": "Prescott Griffin",
            "RegisterDate": "2011-02-22T05:59:55-08:00"
        },
        {
            "Account": "06FAAD9A-5114-08F6-D60C-961B2528B4F0",
            "Name": "Amir Saunders",
            "RegisterDate": "2014-08-13T09:17:49-07:00"
        },
        {
            "Account": "EED7653D-7DD9-A722-64A8-36A55ECDBE77",
            "Name": "Derek Thornton",
            "RegisterDate": "2012-02-27T01:31:07-08:00"
        },
        {
            "Account": "2A2E6D40-FEBD-C643-A751-9AB4CAF1E2F6",
            "Name": "Fletcher Romero",
            "RegisterDate": "2010-06-25T15:49:54-07:00"
        },
        {
            "Account": "3978F8FA-DFF0-DA0E-0A5D-EB9D281A3286",
            "Name": "Thaddeus Stein",
            "RegisterDate": "2013-11-10T07:29:41-08:00"
        },
        {
            "Account": "658DBF5A-176E-569A-9273-74FB5F69FA42",
            "Name": "Nash Knapp",
            "RegisterDate": "2005-06-24T09:11:19-07:00"
        },
        {
            "Account": "76D2EE4B-7A73-1212-F6F2-957EF8C1F907",
            "Name": "Quamar Vega",
            "RegisterDate": "2011-04-13T20:06:29-07:00"
        },
        {
            "Account": "00E46809-A595-CE82-C5B4-D1CAEB7E3E58",
            "Name": "Philip Galloway",
            "RegisterDate": "2008-08-21T18:59:38-07:00"
        },
        {
            "Account": "C196781C-DDCC-AF83-DDC2-CA3E851A47A0",
            "Name": "Mason French",
            "RegisterDate": "2000-11-15T00:38:37-08:00"
        },
        {
            "Account": "5911F201-818A-B393-5888-13157CE0D63F",
            "Name": "Ross Cortez",
            "RegisterDate": "2010-05-27T17:35:32-07:00"
        },
        {
            "Account": "B8BB78F9-E1A1-A956-086F-E12B6FE168B6",
            "Name": "Logan King",
            "RegisterDate": "2003-07-08T16:58:06-07:00"
        },
        {
            "Account": "06F636C3-9599-1A2D-5FD5-86B24ADDE626",
            "Name": "Cedric Leblanc",
            "RegisterDate": "2011-06-30T14:30:10-07:00"
        },
        {
            "Account": "FE880CDD-F6E7-75CB-743C-64C6DE192412",
            "Name": "Simon Sullivan",
            "RegisterDate": "2013-06-11T16:35:07-07:00"
        },
        {
            "Account": "BBEDD673-E2C1-4872-A5D3-C4EBD4BE0A12",
            "Name": "Jamal West",
            "RegisterDate": "2001-03-16T20:18:29-08:00"
        },
        {
            "Account": "19BC22FA-C52E-0CC6-9552-10365C755FAC",
            "Name": "Hector Morales",
            "RegisterDate": "2012-11-01T01:56:34-07:00"
        },
        {
            "Account": "A8292214-2C13-5989-3419-6B83DD637D6C",
            "Name": "Herrod Hart",
            "RegisterDate": "2008-03-13T19:21:04-07:00"
        },
        {
            "Account": "0285564B-F447-0E7F-EAA1-7FB8F9C453C8",
            "Name": "Clark Maxwell",
            "RegisterDate": "2004-08-05T08:22:24-07:00"
        },
        {
            "Account": "EA78F076-4F6E-4228-268C-1F51272498AE",
            "Name": "Reuben Walter",
            "RegisterDate": "2011-01-23T01:55:59-08:00"
        },
        {
            "Account": "6A88C194-EA21-426F-4FE2-F2AE33F51793",
            "Name": "Ira Ingram",
            "RegisterDate": "2008-08-15T05:57:46-07:00"
        },
        {
            "Account": "4275E873-439C-AD26-56B3-8715E336508E",
            "Name": "Damian Morrow",
            "RegisterDate": "2015-09-13T01:50:55-07:00"
        },
        {
            "Account": "A0D733C4-9070-B8D6-4387-D44F0BA515BE",
            "Name": "Macon Farrell",
            "RegisterDate": "2011-03-14T05:41:40-07:00"
        },
        {
            "Account": "B3683DE8-C2FA-7CA0-A8A6-8FA7E954F90A",
            "Name": "Joel Galloway",
            "RegisterDate": "2003-02-03T04:19:01-08:00"
        },
        {
            "Account": "01D95A8E-91BC-2050-F5D0-4437AAFFD11F",
            "Name": "Rigel Horton",
            "RegisterDate": "2015-06-20T11:53:11-07:00"
        },
        {
            "Account": "F0D12CC0-31AC-A82E-FD73-EEEFDBD21A36",
            "Name": "Sylvester Gaines",
            "RegisterDate": "2004-03-12T09:57:13-08:00"
        },
        {
            "Account": "874FCC49-9A61-71BC-2F4E-2CE88348AD7B",
            "Name": "Abbot Mckay",
            "RegisterDate": "2008-12-26T20:42:57-08:00"
        },
        {
            "Account": "B8DA1912-20A0-FB6E-0031-5F88FD63EF90",
            "Name": "Solomon Green",
            "RegisterDate": "2013-09-04T01:44:47-07:00"
        }
    ];

}());