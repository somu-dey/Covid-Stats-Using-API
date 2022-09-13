$.ajax({
    type:'get',
    url:'https://api.covid19api.com/summary',
    success:function(response)
    {
        for(var i=0;i<response.Countries.length;i++)
        {   var active=response.Countries[i].TotalConfirmed-response.Countries[i].TotalRecovered
            var tablerow=`
            <tr>
            <td>
            ${response.Countries[i].Country}
            </td>
            <td>
            ${response.Countries[i].TotalConfirmed}
            </td>
            <td>
            ${active}
            </td>
            <td>
            ${response.Countries[i].TotalRecovered}
            </td>
            <td>
            ${response.Countries[i].TotalDeaths}
            </td>
            

            </tr>`
            $('#tbody').append(tablerow)


            
        }
        $('#maintable').DataTable()
    },
    error:function(error)
    {
        console.log(error)
    }
})