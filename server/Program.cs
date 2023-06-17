using Microsoft.EntityFrameworkCore;
using System.Web.Http.Cors;


var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<EF_DataContext>(o => o.UseNpgsql(builder.Configuration.GetConnectionString("MyConnection")));

var app = builder.Build();


app.UseCors(options=>{
    options.WithOrigins("http://localhost:5173","*","*").WithMethods("GET","POST").WithHeaders("Content-type","Authorization");
});



if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();


app.Run();