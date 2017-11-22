<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>

<%@ Page Language="C#" MasterPageFile="~masterurl/default.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage,Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ID="PageHead" ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <link type="text/css" rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css" />
    <link type="text/css" rel="stylesheet" href="/_layouts/15/RBVH.Stada.Intranet.Branding/libs/jsGrid/jsgrid.min.css" />
    <link type="text/css" rel="stylesheet" href="/_layouts/15/RBVH.Stada.Intranet.Branding/libs/jsGrid/jsgrid-theme.min.css" />
    <link type="text/css" rel="stylesheet" href="/_layouts/15/RBVH.Stada.Intranet.Branding/css/OverviewModule/default.css" />
    
    <script type="text/javascript" src="/_layouts/15/RBVH.Stada.Intranet.Branding/libs/jsGrid/jquery-ui.min.js"></script>
    <script type="text/javascript" src="/_layouts/15/RBVH.Stada.Intranet.Branding/libs/jsGrid/jsgrid.js"></script>
    <script type="text/javascript" src="/_layouts/15/RBVH.Stada.Intranet.Branding/scripts/OverviewModule/Overview.js?v=<%= DateTime.Now.Millisecond %>"></script>
</asp:Content>

<asp:Content ID="PageTitle" ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
    <asp:Literal runat="server" Text="<%$Resources:RBVHStadaWebpages,Overview_PageTitle%>" />
</asp:Content>

<asp:Content ID="PageTitleInTitleArea" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    <asp:Literal runat="server" Text="<%$Resources:RBVHStadaWebpages,Overview_PageTitleArea%>" />
</asp:Content>

<asp:Content ID="Main" ContentPlaceHolderID="PlaceHolderMain" runat="server">
    <!-- Copied from  http://webdeveloperplus.com/jquery/collpasible-drag-drop-panels/ -->
    <div class="column" id="column1">
        <div class="dragbox" id="item1">
            <h2>
                <span class="s-expand show-hide"></span>
                Shift Mamangement 
                <span class="s-counter">5</span>
            </h2>
            <div class="dragbox-content">
                <div id="jsGrid-shift">
                </div>            </div>
        </div>
        <div class="dragbox" id="item2">
            <h2>
                <span class="s-expand show-hide"></span>
                Overtime Management
                <span class="s-counter">8</span>
            </h2>
            <div class="dragbox-content">
                <div id="jsGrid-overtime">
                </div>
            </div>
        </div>
        <div class="dragbox" id="item3">
            <h2>
                <span class="s-expand show-hide"></span>
                Change Shift Management
                <span class="s-counter">13</span>
            </h2>
            <div class="dragbox-content">
                <div id="jsGrid-change-shift">
                </div>
            </div>
        </div>
    </div>
    <div class="column" id="column2">
        <div class="dragbox" id="item4">
            <h2>
                <span class="s-expand show-hide"></span>
                Leave of Absence Management
                <span class="s-counter">15</span>
            </h2>
            <div class="dragbox-content">
                <div id="jsGrid-not-overtime">
                </div>
            </div>
        </div>
        <div class="dragbox" id="item5">
            <h2>
                <span class="s-expand show-hide"></span>
                Leave Management
                <span class="s-counter">2</span>
            </h2>
            <div class="dragbox-content">
                <div id="jsGrid-leave">
                </div>
            </div>
        </div>
        <div class="dragbox" id="item6">
            <h2>
                <span class="s-expand show-hide"></span>
                Vehicle Management
                <span class="s-counter">0</span>
            </h2>
            <div class="dragbox-content">
                <div id="jsGrid-vehicle">
                </div>
            </div>
        </div>
    </div>
    <div class="column" id="column3">
        <div class="dragbox" id="item7">
            <h2>
                <span class="s-expand show-hide"></span>
                Requests Management
                <span class="s-counter">0</span>
            </h2>
            <div class="dragbox-content">
                <div id="jsGrid-requests">
                </div>
            </div>
        </div>
        <div class="dragbox" id="item8">
            <h2>
                <span class="s-expand show-hide"></span>
                Freight Management
                <span class="s-counter">9</span>
            </h2>
            <div class="dragbox-content">
                <div id="jsGrid-freight">
                </div>
            </div>
        </div>
        <div class="dragbox" id="item9">
            <h2>
                <span class="s-expand show-hide"></span>
                Recruitment Management
                <span class="s-counter">123</span>
            </h2>
            <div class="dragbox-content">
                <div id="jsGrid-recruitment">
                </div>
            </div>
        </div>
    </div>
    <div class="column" id="column4">
        <div class="dragbox" id="item10">
            <h2>
                <span class="s-expand show-hide"></span>
                Certificate Management
                <span class="s-counter">99</span>
            </h2>
            <div class="dragbox-content">
                <div id="jsGrid-certificate">
                </div>
            </div>
        </div>
        <div class="dragbox" id="item11">
            <h2>
                <span class="s-expand show-hide"></span>
                Business Trip Management
                <span class="s-counter">37</span>
            </h2>
            <div class="dragbox-content">
                <div id="jsGrid-business-trip">
                </div>
            </div>
        </div>
    </div>

    <script type="text/javascript">
        $(document).ready(function () {
            var settings = {
            };

          overviewInstance = new RBVH.Stada.WebPages.pages.Overview(settings);
      });
    </script>
</asp:Content>
